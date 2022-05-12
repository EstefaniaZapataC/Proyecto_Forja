function buscar(){

    let doc=document.getElementById('doc').value;
    console.log(" el documento ingresado fue"+doc)

     switch (doc){
    
      case "2368795": 
    
                Swal.fire({
                  position: 'center',
                  icon: 'info',
                  title: 'documento' +doc+ 'de Bogota',
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
     
     
      
        case "1001235478": 
    
                Swal.fire({
                  position: 'center',
                  icon: 'info',
                  title: 'documento' +doc+ 'de Bogota',
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
        
              case"25413571":
                  Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: 'documento' +doc+ 'de Bogota',
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
    
    case "25413574":
                Swal.fire({
                  position: 'center',
                  icon: 'info',
                  title: 'documento' +doc+ 'de Bogota',
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
        title: 'Documento no registrado',
        text: '¿Desea realizar el registro de un nuevo usuario?',
        confirmButtonText: 'OK',
        timer:4500,
        backdrop: true,
        
      }).then((value) => {
        window.location. href='registro.html'
      });
    
    }
    }