document.addEventListener("DOMContentLoaded", function (event) {

    //No permitir copiar ni pegar en los campos contraseña
    document.querySelector('#tx_pwd1').addEventListener("copy",(evt)=>{
        alert("No se puede copiar/pegar en eel campo contraseña");
        evt.preventDefault();

    });
    document.querySelector('#tx_pwd1').addEventListener("paste",(evt)=>{
        alert("No se puede copiar/pegar en eel campo contraseña");
        evt.preventDefault();
    });

    document.querySelector('#tx_pwd2').addEventListener("copy",(evt)=>{
        alert("No se puede copiar/pegar en eel campo contraseña");
        evt.preventDefault();
        

    });
    document.querySelector('#tx_pwd2').addEventListener("paste",(evt)=>{
        alert("No se puede copiar/pegar en el campo contraseña");
        evt.preventDefault();
    });

    //Validaciones de los input
    document.querySelector('#tx_pwd1').addEventListener("input",(evt)=>{
        let pwd= document.querySelector("#tx_pwd1").textContent;
        //validar contraseña valida con pattern
        if (!patrones(pwd)){
            alert("Contraseña no válida")
            evt.preventDefault();
        }
        

    });
    document.querySelector('#tx_pwd2').addEventListener("input",(evt)=>{
        //validar contraseña valida con pattern
        let pwd= document.querySelector("#tx_pwd2").textContent;
        if (!patrones(pwd)){
           alert("Contraseña no válida");
           evt.preventDefault();
            
        }
        
        

    });

    //Validaciones en el click del boton
    document.document.querySelector('button').addEventListener('click', (evt) => {
        let ok=validarFormulario();
        if (ok==false){
            evt.preventDefault();
        }    
    });




});

function okFormulario(){
    let ok=true;

    //Valida campo email con checkvalidity
    let email= document.querySelector("#tx_email").textContent;
            if (!email.checkValidity()) {
                document.querySelector("#err_email").setAttribute("hidden", "" );
                document.querySelector("#err_email").textContent="El email no es válido";
                ok=false;
            
    //valida que las contraseñas sean iguales
    let pwd1= document.querySelector("#tx_pdw1").textContent;
    let pwd2= document.querySelector("#tx_pdw2").textContent;
        if (pwd1!=pwd2){ 
            document.querySelector("#err_pdw").setAttribute("hidden", "" );
            document.querySelector("#err_email").textContent="Las contraseñas no coinciden";
            ok=false;
        }

    return ok;
}
}

function patrones(pass){
    ok=false;

    return ok;
}