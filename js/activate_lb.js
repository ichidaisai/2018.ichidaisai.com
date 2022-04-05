jQuery(function($)
{
	var activityIndicatorOn = function()
	{
		$( '<div id="imagelightbox-loading"><div/>' ).appendTo( 'body' );
	},
	activityIndicatorOff = function()
	{
		$( '#imagelightbox-loading' ).remove();
	},

	overlayOn = function()
	{
		$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
	},
	overlayOff = function()
	{
		$( '#imagelightbox-overlay' ).remove();
	},

	closeButtonOn = function( instance )
	{
		$( '<a href="#" id="imagelightbox-close">Close</a>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
	},
	closeButtonOff = function()
	{
		$( '#imagelightbox-close' ).remove();
	},

	captionOn = function()
	{
		//var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' );
		var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ).attr( 'title' );//Kurino modified
		if( description.length > 0 )
			$( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
	},
	captionOff = function()
	{
		$( '#imagelightbox-caption' ).remove();
	},

	navigationOn = function( instance, selector )
	{
		var images = $( selector );
		if( images.length )
		{
			var nav = $( '<div id="imagelightbox-nav"></div>' );
			for( var i = 0; i < images.length; i++ )
				nav.append( '<a href="#"></a>' );

			nav.appendTo( 'body' );
			nav.on( 'click touchend', function(){ return false; });

			var navItems = nav.find( 'a' );
			navItems.on( 'click touchend', function()
			{
				var $this = $( this );
				if( images.eq( $this.index() ).attr( 'href' ) != $( '#imagelightbox' ).attr( 'src' ) )
					instance.switchImageLightbox( $this.index() );

				navItems.removeClass( 'active' );
				navItems.eq( $this.index() ).addClass( 'active' );

				return false;
			})
			.on( 'touchend', function(){ return false; });
		}
	},
	navigationUpdate = function( selector )
	{
		var items = $( '#imagelightbox-nav a' );
		items.removeClass( 'active' );
		items.eq( $( selector ).filter( '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ).index( selector ) ).addClass( 'active' );
	},
	navigationOff = function()
	{
		$( '#imagelightbox-nav' ).remove();
	};

	/*------------------------------------------------------------
	 * Activate lightbox(For each lightbox[name])
	 *------------------------------------------------------------*/
	//Get uniq array every "lightbox[tag]"
	var lbarr=[];
	$("a[rel^='lightbox']").each(function(){
		lbarr.push( $(this).attr("rel") );
	});
	var tmparr = $.unique(lbarr);
	for(var i=0;i<tmparr.length;i++)
	{
		var reltxt = 'a[rel="'+tmparr[i]+'"]';
		$(reltxt).imageLightbox(
		{
			selectro:		'id="imagelightbox"', 
			allowedTypes:   'png|jpg|jpeg|gif', 
			animationSpeed:	250,
			enableKeyboard:	true,
			quitOnEnd:		false,
			quitOnImgClick:	false,
			quitOnDocClick:	true,
			onStart:		function() { overlayOn(); closeButtonOn(); },
			onEnd:			function() { overlayOff(); captionOff(); closeButtonOff(); activityIndicatorOff(); },
			onLoadStart: 	function() { captionOff(); activityIndicatorOn(); },
			onLoadEnd:	 	function() { captionOn(); activityIndicatorOff(); }
		});
	}

});
