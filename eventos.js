const funcionDiv = document.querySelector('.boton');

funcionDiv.addEventListener('click', function(event){
    if (event.target.tagName !== 'BUTTON'){
        alert('Hola! Soy el div');
    }
});