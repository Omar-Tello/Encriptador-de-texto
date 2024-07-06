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


const canvas = document.querySelector("canvas");
// Selecciona el elemento <canvas> y lo guarda en la constante "canvas"

document.querySelector("body").style.overflow = "hidden";
// Oculta las barras de desplazamiento del cuerpo del documento

canvas.height = window.screen.height;
canvas.width = window.screen.width;
// Establece la altura y anchura del canvas igual a la altura y anchura de la pantalla

function step() {
  canvas.getContext("2d").fillStyle = "rgba(0,0,0,0.05)";
  // Establece el color de relleno del contexto 2D del canvas con una opacidad del 5%

  canvas.getContext("2d").fillRect(0, 0, canvas.width, canvas.height);
  // Dibuja un rectángulo transparente sobre todo el canvas para crear un efecto de desvanecimiento

  columns.map(function (value, index) {
    // Itera sobre cada columna (valor) y su índice

    var character = String.fromCharCode(65 + Math.random() * 26);
    // Genera un carácter aleatorio entre 'A' y 'Z'

    canvas.getContext("2d").fillText(
      character, 
      index * 10, 
      value 
    );
    // Dibuja el carácter en la posición correspondiente en el canvas

    columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10;
    // Actualiza la posición de la columna: si la posición es mayor que 758 más un valor aleatorio,
    // reinicia a 0, de lo contrario, incrementa en 10
  });
}

canvas.addEventListener("animationend", () => {
  canvas.remove();
  // Cuando termina la animación del canvas, lo elimina del documento
});

setTimeout(() => {
  document.querySelector("main").classList.remove("hidden");
  document.querySelector("footer").classList.remove("hidden");
  // Después de 1 segundo, muestra los elementos <main> y <footer> eliminando la clase "hidden"
}, 1000);

setTimeout(() => {
  document.querySelector("body").style.overflow = "auto";
  // Después de 3 segundos, restablece las barras de desplazamiento del cuerpo del documento

  document.querySelector(".center img").style.animation = "0";
  document.querySelector(".center p").style.animation = "0";
  document.querySelector(".center h3").style.animation = "0";
  document.querySelector(".center img").style.animation = "0";
  document.querySelector(".copy").style.animation = "0";
  // Detiene las animaciones de los elementos especificados estableciendo su propiedad de animación a "0"
}, 3000);

const toggleBtn = document.querySelector(".toggle-state");
// Selecciona el elemento con la clase "toggle-state" y lo guarda en la constante "toggleBtn"

toggleBtn.addEventListener("input", () => {
  document.querySelector("body").classList.toggle("dark");
  // Añade un evento de entrada al botón de alternar para activar o desactivar la clase "dark" en el cuerpo del documento
});


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