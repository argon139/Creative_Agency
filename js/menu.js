$.fn.modal = function(options) {

	// Vars
	var params = $.extend({
		speed: 300, 
		timingFunction: 'ease'
	}, options);

	$selector = this;

	// Controllers
	function modalController(target) {
		if (target == 'close') {
			$selector.removeClass('active');
			$selector.find('.menu').removeClass('active');
			$('.mobile-menu').attr('data-modal-name', 'active');
		} else {
			$selector.addClass('active');
			$selector.children('.menu' + target).addClass('active');
			$('.mobile-menu').attr('data-modal-name', 'close');
		}
	}

	// Init
	$selector.find('.menu').css('transition', 'all ' + params.speed + 'ms ' + params.timingFunction);

	// Actions
	$('[data-modal]').click(function() {
		var target = $(this).attr('data-modal-name');
		modalController(target);
	});

}