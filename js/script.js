window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('buttonUp');
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

document.getElementById('buttonUp').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        let formValid = true;

        const errorName = document.getElementById("error_name");
        const errorEmail = document.getElementById("error_email");
        const errorMessage = document.getElementById("error_message");

        errorName.textContent = "";
        errorEmail.textContent = "";
        errorMessage.textContent = "";

        if (name === "") {
            errorName.textContent = "Ey, no pusiste tu nombre.";
            formValid = false;
        }
        if (email === "") {
            errorEmail.textContent = "Mhhh! El mail no parece válido.";
            formValid = false;
        }
        if (message === "") {
            errorMessage.textContent = "Dejanos tu consulta!";
            formValid = false;
        }

        if (!formValid) {
            return;
        }

        form.reset();

        alert("Ahora sí! Gracias por consultarnos!");

        const successMessage = document.getElementById("error_enviado");
        successMessage.textContent = "Tu consulta se cargó con éxito!";
        successMessage.classList.add("success");  

        const errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach(error => error.textContent = '');
    });
});

