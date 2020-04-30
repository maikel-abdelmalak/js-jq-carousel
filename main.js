//intercetto il click su next
$('#next').click(function(){
//in img_corrente salvo l'immagine visibile
    var img_corrente = $('.img img.visible');
//in bullet_corrente salvo il cerchio pieno
    var bullet_corrente = $('.bullets .fas')
//tolgo la classe visible all'immagine corrente
    img_corrente.removeClass('visible');
//tolgo la classe fas e aggiungo la classe far al cerchio corrente
    bullet_corrente.removeClass('fas');

    bullet_corrente.addClass('far');
// in img_successiva e bullet_successivo salvo gli elementi img e i succesivi
    var img_successiva = img_corrente.next('img');

    var bullet_successivo = bullet_corrente.next('i')
// se l'mmagine succesiva non è presente in img_successiva e bullet_successivo salvo i primi elementi img e i e aggiungo le classi visible e far
    if(img_successiva.length == 0){
        img_successiva = $('.img img:first-child');
        bullet_successivo = $('.bullets i:first-child');
        img_successiva.addClass('visible')

        bullet_successivo.removeClass('far');

        bullet_successivo.addClass('fas');
//altrimenti cambio direttamente le classi agli elementi
    }else{
        img_successiva.addClass('visible')

        bullet_successivo.removeClass('far');

        bullet_successivo.addClass('fas');

    }

})


$('#prev').click(function(){

    var img_corrente = $('.img img.visible');

    var bullet_corrente = $('.bullets .fas')

    img_corrente.removeClass('visible');

    bullet_corrente.removeClass('fas');

    bullet_corrente.addClass('far');

    var img_prec = img_corrente.prev('img');

    var bullet_prec = bullet_corrente.prev('i')

    if(img_prec.length == 0){
        img_prec = $('.img img:last-child');

        bullet_prec = $('.bullets i:last-child');

        img_prec.addClass('visible')

        bullet_prec.removeClass('far');

        bullet_prec.addClass('fas');

    }else{
        img_prec.addClass('visible')

        bullet_prec.removeClass('far');

        bullet_prec.addClass('fas');

    }

})
