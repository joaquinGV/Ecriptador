const container = document.getElementsByClassName("container-output")[0];

console.log(container);
const notext = `
  <img src="https://media1.tenor.com/m/qGFOs_6ziXAAAAAd/blue-focus.gif" class="no-text-img">
  <p class="no-text">Ningún mensaje fue encontrado</p>
  <p class="no-text-instructions">Ingresa el texto que deseas encriptar o desencriptar</p>
`;
const typing = `
  <img src="https://media1.tenor.com/m/hr-bkpDpZKwAAAAC/cpu-cpurecords.gif" class="no-text-img">
  <p class="no-text">Esperando instrucciones</p>
  <p class="no-text-instructions">Selecciona encriptar o desencriptar al terminar el texto.</p>
`;

container.innerHTML = notext;

const input = document.getElementsByTagName("textarea")[0];

input.addEventListener("input", function (e) {
  const bol = input.value.trim() === "";
  if (bol) {
    container.innerHTML = notext;
  } else {
    container.innerHTML = typing;
  }
});

const encryptButton = document.getElementById("encrypt");

encryptButton.addEventListener("click", (e) => {
  if (input.value.trim() !== "") {
    encrypt();
  }
});

const desencryptButton = document.getElementById("desencrypt");

desencryptButton.addEventListener("click", (e) => {
  if (input.value.trim() !== "") {
    decrypt();
  }
});

function encrypt() {
  const modifications = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  const actualValue = input.value;
  const encryptedValue = actualValue.replace(
    /[aeiou]/g,
    (vocal) => modifications[vocal]
  );
  setWord(encryptedValue);
}

function decrypt() {
  const modifications = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  const actualValue = input.value;
  const desencrypedValue = actualValue.replace(
    /ai|enter|imes|ober|ufat/g,
    (word) => modifications[word]
  );
  setWord(desencrypedValue);
}

function setWord(word) {
  container.innerHTML = `<p id="output">${word}</p>
  <button id="copy">Copiar <span></span><span></span></button>`;

  const outputText = document.getElementById("output");
  const copy = document.getElementById("copy");

  copy.addEventListener("click", (e) => {
    const copyText = outputText.textContent;
    navigator.clipboard.writeText(copyText);
    e.target.innerHTML = "Copiado!<span></span><span></span>";
  });
}
