/*
🔭 Hi, I'm Omar Tello! 
📡 Sigueme en instagram: https://www.instagram.com/0mar.guerra/ 
📡 Sigueme en github: https://github.com/Omar-Tello 
📡 Sigueme en facebook: https://www.facebook.com/omartello.developer/ 
💼 Sigueme a la Empresa: https://www.instagram.com/cni.data/ 
*/

/*
📂 Este es un challenge de un encriptador de texto.
♨️ Recuerda seguir buenas prácticas como comentar el código para facilitar su mantenimiento y comprensión.
*/

const input = document.querySelector("#input");
// Selecciona el elemento con id "input" y lo guarda en la constante "input"

const encryptorScreen = document.querySelector("#screen");
// Selecciona el elemento con id "screen" y lo guarda en la constante "encryptorScreen"

const encryptorBtn = document.querySelector("#btn-encrypt");
// Selecciona el elemento con id "btn-encrypt" y lo guarda en la constante "encryptorBtn"

const decryptBtn = document.querySelector("#btn-decrypt");
// Selecciona el elemento con id "btn-decrypt" y lo guarda en la constante "decryptBtn"

const message = document.querySelector("#message");
// Selecciona el elemento con id "message" y lo guarda en la constante "message"

const copyBtn = document.querySelector("#copy");
// Selecciona el elemento con id "copy" y lo guarda en la constante "copyBtn"

const image = document.querySelector(".center");
// Selecciona el primer elemento con la clase "center" y lo guarda en la constante "image"

const screenContainer = document.querySelector(".screen-container");
// Selecciona el primer elemento con la clase "screen-container" y lo guarda en la constante "screenContainer"

const copyMessage = document.querySelector(".copy");
// Selecciona el primer elemento con la clase "copy" y lo guarda en la constante "copyMessage"

const keys = ["ai", "enter", "imes", "ober", "ufat"];
// Define un array con las claves de encriptación

function getText() {
  const text = input.value;
  // Obtiene el valor del input y lo guarda en la variable "text"

  const messageSpan = message.querySelector("span");
  // Selecciona el primer elemento <span> dentro de "message"

  const messageP = message.querySelector("p");
  // Selecciona el primer elemento <p> dentro de "message"

  if (!isValid(text)) {
    messageSpan.classList.add("error");
    messageP.classList.add("error");
    message.style.animation = "shake 0.8s ease both";
    // Si el texto no es válido, añade la clase "error" a los elementos <span> y <p>,
    // y aplica una animación de "shake" a "message"
  } else {
    messageSpan.classList.remove("error");
    messageP.classList.remove("error");
    message.style.animation = "";
    // Si el texto es válido, elimina la clase "error" de los elementos <span> y <p>,
    // y elimina cualquier animación de "message"
  }

  return isValid(text) ? text : "";
  // Devuelve el texto si es válido, de lo contrario devuelve una cadena vacía
}

function showEncryptedMessage() {
  const text = getText();
  if (text) {
    encryptorBtn.removeEventListener("click", showEncryptedMessage);
    // Si hay texto válido, elimina el evento click del botón de encriptar

    typewriterAnimation(encrypt(text), encryptorBtn, showEncryptedMessage);
    // Ejecuta la animación de máquina de escribir con el texto encriptado

    image.classList.add("hidden");
    screenContainer.classList.remove("hidden");
    // Oculta la imagen y muestra el contenedor de la pantalla
  } else {
    image.classList.remove("hidden");
    screenContainer.classList.add("hidden");
    // Si no hay texto válido, muestra la imagen y oculta el contenedor de la pantalla
  }
}

function showDecryptedMessage() {
  const text = getText();
  if (text) {
    decryptBtn.removeEventListener("click", showDecryptedMessage);
    // Si hay texto válido, elimina el evento click del botón de desencriptar

    typewriterAnimation(decrypt(text), decryptBtn, showDecryptedMessage);
    // Ejecuta la animación de máquina de escribir con el texto desencriptado

    image.classList.add("hidden");
    screenContainer.classList.remove("hidden");
    // Oculta la imagen y muestra el contenedor de la pantalla
  } else {
    image.classList.remove("hidden");
    screenContainer.classList.add("hidden");
    // Si no hay texto válido, muestra la imagen y oculta el contenedor de la pantalla
  }
}

function encrypt(text) {
  let encryptedMessage = "";

  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
        encryptedMessage += keys[0];
        break;
      case "e":
        encryptedMessage += keys[1];
        break;
      case "i":
        encryptedMessage += keys[2];
        break;
      case "o":
        encryptedMessage += keys[3];
        break;
      case "u":
        encryptedMessage += keys[4];
        break;
      default:
        encryptedMessage += text[i];
    }
    // Reemplaza las vocales por sus correspondientes claves en el array "keys"
  }

  return encryptedMessage;
  // Devuelve el mensaje encriptado
}

function decrypt(text) {
  let encryptedMessage = text;

  keys.forEach((key) => {
    encryptedMessage = encryptedMessage.replaceAll(key, key[0]);
    // Reemplaza las claves de encriptación por sus correspondientes vocales
  });

  return encryptedMessage;
  // Devuelve el mensaje desencriptado
}

function isValid(text) {
  return text ? !/[^a-z\sñ]/.test(text) : true;
  // Verifica si el texto es válido (solo letras minúsculas y espacios)
}

function copy() {
  const text = encryptorScreen.innerText;

  if (text) {
    navigator.clipboard.writeText(text);
    // Copia el texto al portapapeles

    document.styleSheets[0].addRule(".copy:after", "display: " + "flex" + ";");
    // Muestra el mensaje de copia exitosa

    setTimeout(() => {
      document.styleSheets[0].addRule(
        ".copy:after",
        "display: " + "none" + ";"
      );
      // Oculta el mensaje de copia exitosa después de 3 segundos
    }, 3000);
  }
}

function typewriterAnimation(text, btn, callback) {
  encryptorScreen.innerText = "";
  let init = 0;
  let last = text.length - 1;

  const interval = setInterval(() => {
    if (init <= last) {
      if (text[init] == " ") {
        encryptorScreen.innerText += "\u00A0";
      } else {
        encryptorScreen.innerText += text[init];
      }
      init++;
    } else {
      clearInterval(interval);
      btn.addEventListener("click", callback);
      // Reinicia el evento click en el botón cuando termina la animación
    }
  }, 30);
  // Añade cada letra del texto una por una al elemento "encryptorScreen", simulando una animación de máquina de escribir
}

input.addEventListener("input", getText);
// Añade un evento input al campo de texto para validar el texto en tiempo real

encryptorBtn.addEventListener("click", showEncryptedMessage);
// Añade un evento click al botón de encriptar para mostrar el mensaje encriptado

decryptBtn.addEventListener("click", showDecryptedMessage);
// Añade un evento click al botón de desencriptar para mostrar el mensaje desencriptado

copyBtn.addEventListener("click", copy);
// Añade un evento click al botón de copiar para copiar el texto al portapapeles



/*
🔭 Hi, I'm Omar Tello! 
📡 Sigueme en instagram: https://www.instagram.com/0mar.guerra/ 
📡 Sigueme en github: https://github.com/Omar-Tello 
📡 Sigueme en facebook: https://www.facebook.com/omartello.developer/ 
💼 Sigueme a la Empresa: https://www.instagram.com/cni.data/ 
*/

/*
📂 Este es un challenge de un encriptador de texto.
♨️ Recuerda seguir buenas prácticas como comentar el código para facilitar su mantenimiento y comprensión.
*/