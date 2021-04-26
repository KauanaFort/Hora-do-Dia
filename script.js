function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date() 
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
     if ( hora > 0 && hora < 6) {
        // É hora de dormir. Ou olhar para as estrelas!
        img.src = "estrelas.png" 
        document.body.style.background= "black"
    } else if ( hora >= 6 && hora < 12) {
        //Bom Dia
        img.src = "montanha.png"
        document.body.style.background= "#ffc681"
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = "transito.png" 
        document.body.style.background= "#989cee"
    } else if (hora >= 18 && hora < 20) {
        //A tarde está chegando ao fim, corra para ver o pôr do sol! 
        img.src = "praia.png" 
        document.body.style.background= "#cab9b6"
    } else if (hora >= 20) {
        //Boa noite
        img.src = "rua.png"
        document.body.style.background= "#5b5e5e"
    } 
    
}