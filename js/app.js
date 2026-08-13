/* =========================================
SENTINEL
Aplicación principal - Autenticación
AIIM Nova
Versión: 0.0.1
========================================= */


/* ---------- Configuración API ---------- */


/*
URL del Web App de Google Apps Script

Actualmente queda pendiente.

Ejemplo:

https://script.google.com/macros/s/XXXXXXXXXXXX/exec

*/

const API_URL = "https://script.google.com/macros/s/AKfycbz05LnuG2Zru12Znf2kVDjH9C9O_F59zR_NyRGcwUlOF51mXRCa05YxwnnW3clLgADy/exec";



/* ---------- Elementos HTML ---------- */

const loginForm = document.getElementById("login-form");

const loginButton = document.getElementById("login-button");

const loginMessage = document.getElementById("login-message");



/* ---------- Evento Login ---------- */

loginForm.addEventListener("submit", async function(event){


    event.preventDefault();



    const username =
        document
        .getElementById("username")
        .value
        .trim();



    const password =
        document
        .getElementById("password")
        .value;



    /*
    Validación básica
    */

    if(username === "" || password === ""){


        showMessage(
            "Complete todos los campos."
        );


        return;

    }



    setLoading(true);



    /*
    =====================================
    CONEXIÓN CON SENTINEL API

    Envía credenciales hacia
    Google Apps Script

    =====================================
    */


    try{


        const response = await fetch(
            API_URL,
            {

                method:"POST",

                headers:{
                    "Content-Type":
                    "application/json"
                },


                body:JSON.stringify({

                    usuario:username,

                    password:password

                })

            }
        );



        const data =
            await response.json();



        /*
        Respuesta esperada:

        {
          autorizado:true,
          usuario:"admin",
          rol:"administrador"
        }

        */



        if(data.autorizado){



            createSession(data);



            showMessage(
                "Acceso autorizado.",
                "success"
            );



            setTimeout(function(){


                window.location.href =
                "dashboard.html";


            },800);



        }


        else{


            showMessage(
                "Usuario o contraseña incorrectos."
            );


            setLoading(false);


        }



    }


    catch(error){


        console.error(
            "Error conexión API:",
            error
        );


        showMessage(
            "Error de conexión con SENTINEL."
        );


        setLoading(false);


    }



});





/* ---------- Crear sesión ---------- */


function createSession(userData){


    const session = {


        usuario:
        userData.usuario,


        rol:
        userData.rol,


        fecha:
        new Date().toISOString()


    };



    localStorage.setItem(

        "sentinel_session",

        JSON.stringify(session)

    );


}





/* ---------- Mensajes ---------- */


function showMessage(
    message,
    type="error"
){


    loginMessage.textContent =
    message;



    if(type==="success"){


        loginMessage.style.color =
        "#22c55e";


    }

    else{


        loginMessage.style.color =
        "#ef4444";


    }



}





/* ---------- Estado botón ---------- */


function setLoading(loading){



    if(loading){


        loginButton.disabled =
        true;


        loginButton.textContent =
        "Verificando...";


    }


    else{


        loginButton.disabled =
        false;


        loginButton.textContent =
        "Ingresar";


    }


}