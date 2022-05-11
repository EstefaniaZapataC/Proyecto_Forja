function ingresar(){

let usuario=document.getElementById("usuario").value;
let contrasena=document.getElementById("contrasena").value;


var c="Kuepa2022";
var u="Admin";

if(usuario==u && contrasena==c){


    Swal.fire({
        position:'center',
        icon: 'success',
        title: 'Bienvenido!',
        showConfirmButton : false,
        timer: 1500
      }).then((value) => {
        window.location. href='dashboard.html'
      });
}
else{
    Swal.fire({
        icon: 'error',
        title: 'Algo salio mal',
        text: 'verifica que tu usuario y contraseña sean correctos',
        confirmButtonText: 'OK',
        footer: '<a href="">Olvidaste tu conseña?</a>'
      });
}
}