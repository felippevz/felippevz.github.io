function setAge(ctrol) {    

    let dataAtual = new Date();
    let dataAniv = new Date(2003, 5, 12)
    let age;

    var paragraph = ctrol.getElementById('age');

    /*
        Como o #getTime vem em milisegundos, temos que tratar para anos.
        1000ms/1000 -> 1 segundo
        60s/60 -> 1 minuto
        60m/60 -> 1 hora
        24h/365.25 -> 1 ano       
    */
    age = (dataAtual.getTime() - dataAniv.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

    paragraph.innerHTML = Math.floor(age);
}

window.onload = function(){
    setAge(document);
}