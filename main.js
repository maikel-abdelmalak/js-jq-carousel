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

//rendo cliccabili i bullets, intercetto il click
$('.bullets i').click(function(){
//salvo in indice l'indice della posizione del bullet cliccato (this) con la funzione index
    var indice = $(this).index();
    console.log(indice);
//inverto le classi al bullet pieno
    var bullet_pieno = $('.bullets i.fas').removeClass('fas');
    bullet_pieno.addClass('far');
//inverto le classi al bullet cliccato
    $(this).removeClass('far');
    $(this).addClass('fas');
//tolgo la classe visible all'immagine visibile al momento del click
    var img_visibile = $('.img img.visible');

    img_visibile.removeClass('visible');

//aggiungo la classe visible all'immagine che ha lo stesso indice dell bullet cliccato
    var img_click = $('.img img').eq(indice);

    img_click.addClass('visible')
})
