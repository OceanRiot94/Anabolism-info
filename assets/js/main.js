
(function($) {
	skel.breakpoints({
		wide: '(min-width: 961px) and (max-width: 1880px)',
		normal: '(min-width: 961px) and (max-width: 1620px)',
		narrow: '(min-width: 961px) and (max-width: 1320px)',
		narrower: '(max-width: 960px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {
		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a');

			// Scrolly-fy links.
				$nav_a
					.scrolly()
					.on('click', function(e) {

						var t = $(this),
							href = t.attr('href');

						if (href[0] != '#')
							return;

						e.preventDefault();

						// Clear active and lock scrollzer until scrolling has stopped
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set this link to active
							t.addClass('active');

					});

			// Initialize scrollzer.
				var ids = [];
				$nav_a.each(function() {
					var href = $(this).attr('href');
					if (href[0] != '#')
						return;
					ids.push(href.substring(1));
				});

				$.scrollzer(ids, { pad: 200, lastHack: true });

		// Header (narrower + mobile).

			// Toggle.
				$(
					'<div id="headerToggle">' +
						'<a href="#header" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#headerToggle, #header, #main')
						.css('transition', 'none');
	});
})(jQuery);

			//Slider
var slider = {
    slides:['images/01.jpg','images/02.jpg','images/03.jpg','images/04.jpg','images/05.jpg','images/06.jpg'],
    frame:0, // getting picture from array
    set: function(image) { // background set-up
        document.getElementById("scr").style.backgroundImage = "url("+image+")";
    },
    init: function() { // launching slider wit index 0
        this.set(this.slides[this.frame]);
    },
    left: function() { // +1 left
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
    },
    right: function() { //+1 right
        this.frame++;
        if(this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    }
};
window.onload = function() {
    slider.init();
    setInterval(function() { // interval set-up
        slider.right();
    },5000);
};
		
		//Contact form
function send_data(){
	function loader(){
		$("#loader").show();
	}
	setTimeout(loader, 500);

	$.ajax({
            url: 'http://anabolizm.engur.co/aliugh24',
            type: 'POST',
            dataType: 'JSON',
            data: {
                act: 'set',
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val(),
            },
            success: function (data){
                console.log(data);
                if (data['status'] != 'ok'); {
                    alert(data['error']);
            	}	
        	}
     });

function hide_loader(){
	$("#loader").hide();
	alert(`Ваше повідомлення надіслано. Найближчим часом наш агент з вами зв'яжиться. Для продовження натиснить клавішу 'Ок'.`);
	}
setTimeout(hide_loader, 2000);

function clear_data(){
		name: $('#name').val("");
		email: $('#email').val("");
		message: $('#message').val("");
	}
	setTimeout(clear_data, 1800);
}


