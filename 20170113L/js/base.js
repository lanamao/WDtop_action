$( function ( ) {
	jQuery( '#parallax' ).jparallax( );

	$( '.i18n-needed' ).css( { color: 'red', backgroundColor: 'yellow' } );

	$( 'body#' + body_id ).find( 'li#nav-' + body_id + ' a' ).css( { opacity: 1, filter: 'alpha(opacity=100)' } ).addClass( 'current' );
	$( 'ul.mainnav li' ).each( function ( ) {
		$( this ).hover( function ( ) {
			$a = $( this ).children( 'a:first' );
			if ( !$a.hasClass( 'current' ) )
				$a.css( { opacity: 0, filter: 'alpha(opacity=0)' } ).stop( ).fadeTo( 300, 1 );
		}, function ( ) {
			$a = $( this ).children( 'a:first' );
			if ( !$a.hasClass( 'current' ) )
				$a.css( { opacity: 1, filter: 'alpha(opacity=100)' } ).fadeTo( 300, 0 );
		} );
	} );

	$( 'a.video-link span, a.fabulous-button span' ).each( function ( ) {
		$( this ).hover( function ( ) {
			$( this ).css( { opacity: 0, filter: 'alpha(opacity=0)' } ).stop( ).fadeTo( 300, 1 );
		}, function ( ) {
			$( this ).css( { opacity: 1, filter: 'alpha(opacity=100)' } ).fadeTo( 300, 0 );
		} );
	} );

} );
