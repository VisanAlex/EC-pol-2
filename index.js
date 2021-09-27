let tabela = document.querySelector('.tabela')


function Exponent() { 
    window.location.href = "/pagine/index.html#faccie2";
}


function Exponent2() { 
    window.location.href = "/pagine/vlad.html#faccie2";
}

function Exponent3() { 
    window.location.href = "/pagine/bussa.html#faccie2";
}

function Exponent4() { 
    window.location.href = "/pagine/matteo.html#faccie2";
}


document.getElementById("imgAlex").onclick = function() {
    Exponent();
}

document.getElementById("imgVlad").onclick = function() {
    Exponent2();
}


document.getElementById("imgBussa").onclick = function() {
    Exponent3();
}

document.getElementById("imgMatteo").onclick = function() {
    Exponent4();
}