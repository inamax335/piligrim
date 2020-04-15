document.addEventListener("DOMContentLoaded", function() {

		var navListItems = $('div.setup-panel div a'),
	          allWells = $('.setup-content'),
	          allNextBtn = $('.nextBtn'),
	  		  allPrevBtn = $('.prevBtn');

	  allWells.hide();

	  navListItems.click(function (e) {
	      e.preventDefault();
	      var $target = $($(this).attr('href')),
	              $item = $(this);

	      if (!$item.hasClass('disabled')) {
	          navListItems.removeClass('btn-primary').addClass('btn-default');
	          $item.addClass('btn-primary');
	          allWells.hide();
	          $target.show();
	          // $target.find('input:eq(0)').focus();
	      }
	  });
	  
	  allPrevBtn.click(function(){
	      var curStep = $(this).closest(".setup-content"),
	          curStepBtn = curStep.attr("id"),
	          prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

	          prevStepWizard.removeAttr('disabled').trigger('click');
	  });

	  allNextBtn.click(function(){
	      var curStep = $(this).closest(".setup-content"),
	          curStepBtn = curStep.attr("id"),
	          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
	          curInputs = curStep.find("input[type='text'],input[type='url']"),
	          isValid = true;

	      $(".form-group").removeClass("has-error");
	      for(var i=0; i<curInputs.length; i++){
	          if (!curInputs[i].validity.valid){
	              isValid = false;
	              $(curInputs[i]).closest(".form-group").addClass("has-error");
	          }
	      }

	      if (isValid)
	          nextStepWizard.removeAttr('disabled').trigger('click');
	  });

	  $('div.setup-panel div a.btn-primary').trigger('click');

	  //E-mail Ajax Send
	$("#form-kviz").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$("#form-kviz .success-message").addClass("show");
			setTimeout(function() {
				$("#form-kviz .success-message").removeClass("show");
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});

	$(".form-contact").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".form-contact .success-message").addClass("show");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".form-contact .success-message").removeClass("show");
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$(".toggle-mnu").click(function() {
	  $(this).toggleClass("on");
	  $(".header-mobile-menu").toggle();
	  return false;
	});

	$("body").append('<div class="top"><i class="fa fa-angle-up"></i></div>');

	$("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});

	 var owl = $('.katalog_gallery');
		owl.owlCarousel({
			items: 3,
			center: true,
			dots: false,
			loop: true,
			margin: 20,
			startPosition: 2,
			responsive : {
		  0 : {
		      items: 1,
		      center: false
		  },
		  992 : {
		      items: 3,
		  }
		}
		});
		// Go to the next item
		$('.katalog_gallery-next').click(function() {
		    owl.trigger('next.owl.carousel');
		});
		// Go to the previous item
		$('.katalog_gallery-prev').click(function() {
		    // With optional speed parameter
		    // Parameters has to be in square bracket '[]'
		    owl.trigger('prev.owl.carousel', [300]);
		});

		 var owl2 = $('.reviews_gallery');
			owl2.owlCarousel({
				items: 3,
				center: true,
				dots: false,
				loop: true,
				margin: 20,
				responsive : {
			  0 : {
			      items: 1,
			      center: false
			  },
			  992 : {
			      items: 3,
			  }
			}
			});
			// Go to the next item
			$('.reviews_gallery-next').click(function() {
			    owl2.trigger('next.owl.carousel');
			});
			// Go to the previous item
			$('.reviews_gallery-prev').click(function() {
			    // With optional speed parameter
			    // Parameters has to be in square bracket '[]'
			    owl2.trigger('prev.owl.carousel', [300]);
			});

			var owl3 = $('.catalog-banner');
			owl3.owlCarousel({
				items: 1,
				dots: false,
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				animateOut: 'fadeOut',
				dots: true,
				// itemElement: 'catalog-banner-slide',
				responsive : {
			  0 : {
			      items: 1,
			  },
			  992 : {
			      items: 1,
			  }
			}
			});

		$('input, textarea').focus(function(){
	  $(this).parents('.form-group').addClass('focused');
	});

	$('input, textarea').blur(function(){
	  var inputValue = $(this).val();
	  if ( inputValue == "" ) {
	    $(this).removeClass('filled');
	    $(this).parents('.form-group').removeClass('focused');  
	  } else {
	    $(this).addClass('filled');
	  }
	});

    $( ".catalog-sidebar" ).accordion({
    	collapsible: true,
    	header: '> .catalog-sidebar-item > .catalog-sidebar-title',
    	active: false,
    	heightStyle: "content"
    });

    $( ".catalog-sidebar-child" ).accordion({
    	collapsible: true,
    	header: '> .catalog-sidebar-child-item > .catalog-sidebar-child-title',
    	active: false,
    	heightStyle: "content"
    });

    $( ".catalog-sidebar-mobile" ).accordion({
    	collapsible: true,
    	active: false,
    	heightStyle: "content"
    });

    $('.zoom-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			},
			gallery: {
				enabled: true,
				tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			},
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}
			
		});

});
