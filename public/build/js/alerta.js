function limpiarErrores(){const e=document.querySelectorAll(".alerta");null!==e.length&&e.forEach(e=>{setTimeout(()=>{e.remove()},3e3)})}document.addEventListener("DOMContentLoaded",(function(){limpiarErrores()}));