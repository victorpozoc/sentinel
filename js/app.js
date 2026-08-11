/* =========================================
   SENTINEL
   Lógica principal - Login
   AIIM Nova
   ========================================= */


/* ---------- Elementos ---------- */

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");


/* ---------- Login ---------- */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;


    /* Validación básica */

    if (username === "" || password === "") {

        showMessage("Complete todos los campos.");

        return;
    }


    /* Estado de carga */

    setLoading(true);


    /*
     * LOGIN TEMPORAL
     *
     * Esta sección será reemplazada posteriormente
     * por una petición a la API de SENTINEL.
     */

    setTimeout(function () {

        if (username === "admin" && password === "sentinel") {

            showMessage("Acceso autorizado.", "success");

            /*
             * Temporalmente redirigimos al dashboard.
             *
             * Más adelante:
             *
             * API → autenticación → token/sesión
             * → dashboard
             */

            setTimeout(function () {

                window.location.href = "dashboard.html";

            }, 800);

        } else {

            showMessage("Usuario o contraseña incorrectos.");

            setLoading(false);

        }

    }, 800);

});


/* ---------- Mensajes ---------- */

function showMessage(message, type = "error") {

    loginMessage.textContent = message;

    if (type === "success") {

        loginMessage.style.color = "#22c55e";

    } else {

        loginMessage.style.color = "#ef4444";

    }
}


/* ---------- Estado del botón ---------- */

function setLoading(loading) {

    if (loading) {

        loginButton.disabled = true;

        loginButton.textContent = "Verificando...";

    } else {

        loginButton.disabled = false;

        loginButton.textContent = "Ingresar";

    }

}

