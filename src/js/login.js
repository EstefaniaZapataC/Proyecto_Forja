//Login
function ingresar(){

  let user=document.getElementById("username").value;
  let password=document.getElementById("password").value;

  var p="Kuepa2022";
  var u="Admin";

  if(user==u && password==p){    

      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bienvenido!',
          showConfirmButton: false,
          backdrop: true,
          timer: 1000
        }).then((value) => {
          window.location. href='dashboard.html'
        });
  } else{
      Swal.fire({
          icon: 'error',
          title: 'Algo salio mal',
          text: 'Verifique que su usuario y contraseña sean correctos',
          confirmButtonText: 'OK',
          backdrop: true,
          footer: '<a href="">¿Olvidaste tu contraseña?</a>'
        })
  }
}

//Dashboard

function buscar(){

let doc=document.getElementById("doc").value;

let op=document.getElementById('op').value;
 switch (op){

  case 1: doc=="52368795";
  Swal.fire({
    position: 'center',
    icon: 'info',
    title: 'documento' +cedula+ 'de Bogota',
    text: 'paciente vacunado con primer esquema',
    text: 'Biologico: Moderna',
    text: 'Fecha: 04/04/2022',
    confirmButtonText:'Ir a registro',
    backdrop: true,
    showConfirmButton: true,
  }).then((value) => {
    window.location. href='vacunacion.html'
  });
  
    break;
 
  
    case 2: doc=="1001235478";

            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'documento' +cedula+ 'de Bogota',
              text: 'paciente vacunado con primer esquema',
              text: 'Biologico: Moderna',
              text: 'Fecha: 04/04/2022',
              confirmButtonText:'Ir a registro',
              backdrop: true,
              showConfirmButton: true,
              }).then((value) => {
                window.location. href='vacunacion.html'
              });

              break;
    
          case 3: doc== "25413571"
              Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'documento' +cedula+ 'de Bogota',
                text: 'Paciente vacunado con primer y segunda dosis',
                title: 'Dosis 1',
                text: 'Biologico: Moderna',
                text: 'Fecha: 04/09/2021',
                title: 'Dosis 2',
                text: 'Biologico: Moderna',
                text: 'Fecha: 10/02/2022',
                confirmButtonText:'Ir a registro',
                backdrop: true,
                showConfirmButton: true,
                
                }) .then((value) => {
                window.location. href='vacunacion.html'
              });

              break;

case 4: doc=="25413574"
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'documento' +cedula+ 'de Bogota',
              text: 'Paciente con esquema completo',
              title: 'Dosis 1',
              text: 'Biologico: Moderna',
              text: 'Fecha: 04/09/2021',
              title: 'Dosis 2',
              text: 'Biologico: Moderna',
              text: 'Fecha: 10/02/2022',
              title: 'Dosis 3',
              text: 'Biologico: Janssen',
              text: 'Fecha: 01/05/2022',
              confirmButtonText:'Ir a registro',
              backdrop: true,
              showConfirmButton: true,
              
              }) .then((value) => {
              window.location. href='vacunacion.html'
            });


            break;
  default:
  Swal.fire({
    icon: 'warning',
    title: 'Paciente no registrado',
    text: '¿Desea realizar el registro de un nuevo usuario?',
    confirmButtonText: 'OK',
    backdrop: true,
    
  }).then((value) => {
    window.location. href='registro.html'
  });

}
}