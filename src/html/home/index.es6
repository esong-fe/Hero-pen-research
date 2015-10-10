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

//$( '.yx-product-name' ).mouseenter( function () {
//  //console.log('x')
//  $( this ).siblings( '.yx-product-des' ).show();
//} );
//
//$( '.yx-product-des' ).mouseleave( function () {
//  //console.dir( this );
//  $( this ).hide();
//} );
