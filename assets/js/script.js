// Formulario de contacto

const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", function (event) {
event.preventDefault();
let fullName = document.getElementById("fullName").value;
let email = document.getElementById("email").value;
let msg = document.getElementById("message").value;

//console.log('Los datos son: ' + fullName + email + msg);
form.reset();

let contentForm = document.querySelector("#contentForm");
contentForm.classList.add("alert", "alert-success");
contentForm.innerHTML = `
        <hr>
        <br><strong>Mensaje enviado.</strong>
        <br><strong>Nombre: </strong> ${fullName}
        <br><strong>Email: </strong> ${email}
        <br><strong>Mensaje: </strong> ${msg}
`;
});
