var form = document.getElementById("form");

var select = document.getElementById("select");

var other = document.createElement("input");
other.setAttribute("id", "other");
other.setAttribute("type", "text");
other.setAttribute("name", "other");
other.setAttribute("placeholder", "¿Cómo has llegado hasta mi?");
other.setAttribute("required", "");
other.style.marginTop = '15px';
other.style.width = '200px';


select.addEventListener("change", function (evt) {
    if (this.value === "Otros") {
        select.parentNode.appendChild(other);
    }else{
        if (document.getElementById("other")){
            select.parentNode.removeChild(other);
        }
    }
});


form.addEventListener("submit", function(evt){
    var inputNombre = document.getElementById("nombre");
    var emailInput = document.getElementById("email");
    var tlfInput = document.getElementById("tlf");
    var others = document.getElementById("other");
    var message = document.getElementById("mensaje");

    console.log(message.value);




    if (inputNombre.checkValidity() == false) {
        alert("Por favor, escribe tu nombre.");
        inputNombre.focus();
        evt.preventDefault();
        return false;
    }
    if (emailInput.checkValidity() == false) {
        alert("Introduce tu email en la casilla correspondiente.");
        email.focus();
        evt.preventDefault();
        return false;
    }

    if (tlfInput.checkValidity() == false) {
        alert("Necesitamos tu numero de telefono para ponernos en contacto contigo, solo numeros.");
        tlfInput.focus();
        evt.preventDefault();
        return false;
    }

    if (others){
        if (others.checkValidity() == false){
            alert("Por favor, reponda a la pregunta de Como ha llegado hasta mi.");
            others.focus();
            evt.preventDefault();
            return false;

        }
    }
    if (message.value === ''){
        alert("Escriba un mensaje con su consulta, por favor.");
        message.focus();
        evt.preventDefault();
        return false;
    }

    if (message.value.split(' ').length > 150 ) {
        alert("Hay un maximo de 150 palabras");
        message.focus();
        evt.preventDefault();
        return false;
    }


});