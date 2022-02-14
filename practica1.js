document.addEventListener("DOMContentLoaded", function (event) {

    //No permitir copiar ni pegar en los campos contraseña
    document.querySelector('#pwd1').addEventListener("copy",(evt)=>{

        evt.preventDefault();

    });
    document.querySelector('#pwd1').addEventListener("paste",(evt)=>{
        evt.preventDefault();
    });

    document.querySelector('#pwd2').addEventListener("copy",(evt)=>{

        evt.preventDefault();

    });
    document.querySelector('#pwd2').addEventListener("paste",(evt)=>{
        evt.preventDefault();
    });

    //Validaciones de los input
    document.querySelector('#pwd1').addEventListener("input",(evt)=>{
        //validar contraseña valida con checkvalidity



    });
    document.querySelector('#pwd2').addEventListener("input",(evt)=>{
        //validar contraseña valida con checkvalidity

        

    });

    //Validaciones en el click del boton
    document.document.querySelector('button').addEventListener('click', (evt) => {
        let ok=validarFormulario();
        if (ok==false){
            evt.preventDefault();
        }
        
    });




});

function validarFormulario(){
    let error;


    return error;
}