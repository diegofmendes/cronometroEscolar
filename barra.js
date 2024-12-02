
let contador = 0;

setInterval(function(){
    open('./timer.html', '_self');
},5000);


setInterval(function(){

    contador = contador + 2;

    valorLoader = document.getElementById('loader').style.width = contador + '%';

    //document.getElementById('loader').style.width += valorLoader + 1 + '%';

    console.log(valorLoader)

},100);