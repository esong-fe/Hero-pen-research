$( '.bxslider' ).bxSlider( {
  mode : 'fade' ,
  pager : false
} );

$( document )
  .on( 'mouseenter' , '.yx-product-name' , function () {
    $( this ).siblings( '.yx-product-des' ).show();
  } )
  .on( 'mouseleave' , '.yx-product-des' , function () {
    $( this ).hide();
  } );
