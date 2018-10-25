require(['SimpleTabs'], function( SimpleTabs ){


	new SimpleTabs({
		root: $('.j-tab'),
        tabNav: $('.j-tab-nav')
	});


	$('.prices-accordion-item .prices-accordion-content').hide();
	$('.prices-accordion-item ').addClass('accordion_closed');

	$('.prices-accordion-item:first-of-type .prices-accordion-content').show();
	$('.prices-accordion-item:first-of-type ').removeClass('accordion_closed');

	$('.js-accordions .accordion:first-of-type .accordion__text').show();
	$('.js-accordions .accordion:first-of-type').removeClass('accordion_closed');


	$('.prices-accordion-title__left').click(function(){
	    if( $(this).closest('.prices-accordion-item').hasClass('accordion_closed') )
	    {
	        $(this).closest('.prices-accordion-item').removeClass('accordion_closed');
	        $(this).closest('.prices-accordion-item').find('.prices-accordion-content').slideDown();

	    } else {
	        $(this).closest('.prices-accordion-item').addClass('accordion_closed');
	        $(this).closest('.prices-accordion-item').find('.prices-accordion-content').slideUp();
	    }
	})

	$('.tab-item a, .prices-accordion-title__left').click(refreshStatus);

	function refreshStatus()
	{
		
		var id = $('.j-tab-nav .tab-item.active a').attr('href').replace('#', '');
		var parent = $('#'+id);

		var total = parent.find('.prices-accordion-item').length;
		var closed = parent.find('.prices-accordion-item.accordion_closed').length;
		var opened = parent.find('.prices-accordion-item:not(.accordion_closed)').length;

		
		if( closed === total ){
			$('.prices-content-top-right').removeClass('closed').addClass('opened')

		}

		if( opened === total ){
			$('.prices-content-top-right').removeClass('opened').addClass('closed')
		}
	}
	$('.prices-content-top-right').click(function(){
		
		var id = $('.j-tab-nav .tab-item.active a').attr('href').replace('#', '');
		var parent = $('#'+id);

		if( $('.prices-content-top-right' ).hasClass('opened') ){
			parent.find('.prices-accordion-item.accordion_closed .prices-accordion-title__left').trigger('click')
		} else if ( $('.prices-content-top-right' ).hasClass('closed') ){
			parent.find('.prices-accordion-item:not(.accordion_closed) .prices-accordion-title__left').trigger('click')
		}

	})
	refreshStatus()

	$(".js-scroll-block").mCustomScrollbar({
		setHeight:1,
		theme:"rounded"
	});

});


