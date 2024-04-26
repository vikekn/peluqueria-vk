document.addEventListener('DOMContentLoaded', function() {

    limpiarErrores();
});
function limpiarErrores(){
    const errores = document.querySelectorAll('.alerta');
    
    if(errores.length !==null){
        errores.forEach( error => {
            setTimeout(() => {
                error.remove();
            }, 3000)
        } )
    }
}