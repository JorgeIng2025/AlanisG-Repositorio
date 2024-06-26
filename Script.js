// $(document).ready(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 50) {
//             $('header').css('background-color', 'rgba(255, 255, 255, 1)');
//         } else {
//             $('header').css('background-color', 'rgba(255, 255, 255, 0.8)');
//         }
//     });
// });


// document.getElementById('navLink').addEventListener('click', function(event) {
//     event.preventDefault(); // Evita el comportamiento por defecto del enlace
//     smoothScroll(document.querySelector('#Proyectos'), 1000); // Desplazamiento suave a la sección Proyectos en 1000ms
//     // });
// });


const $form = document.querySelector('#form')

$form.addEventListener('submit', handlesubmit)

async function handlesubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })

    if (response.ok){
        this.reset()
        alert('Gracias por contactarme!')
    }
}
 

