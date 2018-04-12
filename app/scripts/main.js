$(document).ready(function(){

	$('#reload').click(function() {
		location.reload();
	})

	$('#submit').click(function() {
		var iFrame = $('input[name=video-select]:checked').val();
		if (iFrame == 'youtube') {
			iFrame = $('.youtube-iframe');
		} else {
			iFrame = $('.vimeo-iframe');
		}
		var options = getOptions();
		var optionsJSON = JSON.stringify(options, undefined, 4);
		console.log('optionsJSON: ', optionsJSON);
		$('.json').html(optionsJSON);
		iFrame.stickyVideo(options);
	})

	$('.header a').click(function(e) {
		e.preventDefault();
		$('.header a').parent('li').removeClass('active');
		$(this).parent('li').addClass('active');
		var target='#'+this.getAttribute('data-target');
		$('html, body').animate({
			scrollTop: $(target).offset().top
			},
			1e3)
	});

	function getOptions() {
		var options = {};
		var horizontalDirection = $('input[name=right-left]:checked').val();
		var horizontalMeasurement = $('input[name=right-left]:checked').siblings('input[type=text]').val();
		var verticalDirection = $('input[name=top-bottom]:checked').val();
		var verticalMeasurement = $('input[name=top-bottom]:checked').siblings('input[type=text]').val();
		var width = $('.sticky-width').val();
		var onScroll = $('input[name=onScroll]:checked').val();
		if (onScroll == 'true') {
			onScroll = true;
		} else {
			onScroll = false;
		}
		var onPlay = $('input[name=onPlay]:checked').val();
		if (onPlay == 'true') {
			onPlay = true;
		} else {
			onPlay = false;
		}
		var onPause = $('input[name=onPause]:checked').val();
		if (onPause == 'true') {
			onPause = true;
		} else {
			onPause = false;
		}

		options[horizontalDirection] = horizontalMeasurement;
		options[verticalDirection] = verticalMeasurement;
		options.width = width;
		// options.onScroll = onScroll;
		// options.onPlay = onPlay;
		// options.onPause = onPause;

		return options;
	}
})