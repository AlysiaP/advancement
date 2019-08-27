var STATE_CLOSED = 0;
var STATE_OPEN = 1;


$(document).ready(function() {

    // UTA menu: first load the UTA menu and, if successful, set the click event handler on the uta menu icon to open and close the UTA menu
    var $utaMenu = $('#uta-menu'); // container for UTA menu
    $utaMenu.load('https://web.archive.org/web/20170310003430/http://www-devel.uta.edu/honors/__server/uta-menu.html', function()
	{
		$('#header-menu-uta').find('a').click(function(event)
		{
			event.preventDefault();

			var $p = $(this).parent();
			if ($p.hasClass('selected'))
			{
				$utaMenu.slideUp(100);
				$(this).removeClass('fa-times').addClass('fa-chevron-down');
				$p.removeClass('selected');
			}
			else {
				$utaMenu.slideDown(100);
				$(this).removeClass('fa-chevron-down').addClass('fa-times');
				$p.addClass('selected');
			}
		});
	});

    
    /***
    $('.morelink').each(function(){
        
        //this._state = STATE_CLOSED;
        var target_id = $(this).attr('data-target');
        var target = document.getElementById(target_id);
        
        $(this).on('click', function(){
            $(target).toggle();
        });
        
    });
    **/
    
    
    $('#mobile-navbar a.hamburger').on('click', function() {
        $(document.documentElement).addClass('menu-open');
        $('#nav-mobile').addClass('open');
    });
    
    $('#nav-mobile a.close').on('click', function() {
        $('#nav-mobile').removeClass('open');
        $(document.documentElement).removeClass('menu-open');
    });
    
    $('#mobile-navbar a.speakers').on('click', function() {
        $(document.documentElement).addClass('menu-open');
        $('#nav-mobile-speakers').addClass('open');
    });
    
    $('#nav-mobile-speakers a.close').on('click', function() {
        $('#nav-mobile-speakers').removeClass('open');
        $(document.documentElement).removeClass('menu-open');
    });
    
    
    $('.speaker-accordion').each(function() {
       
       $speakers = $(this).children();
       $default_speaker = $(this).children('.active');
       
       $speakers.each(function() {
            
          $(this).on('mouseenter', function() {
            $default_speaker.removeClass('active');
            $( this ).addClass( "active" );
          });
          
          $(this).on('mouseleave', function() {
            $( this ).removeClass( "active" );
          });
          
       });
       
       $(this).on('mouseleave', function(){
         
         $speakers.removeClass('active');
         $default_speaker.addClass('active');
         
       });
       
    });
       
       
       
    $('aside.speaker-list').each(function(){
       
       var content_top = $('div.content-box').position().top;
       $(this).css({top: content_top});
       
    });
    
});


/*
     FILE ARCHIVED ON 00:34:30 Mar 10, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:59:15 Aug 01, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 48.089 (3)
  esindex: 0.01
  captures_list: 67.761
  CDXLines.iter: 14.317 (3)
  PetaboxLoader3.datanode: 98.158 (4)
  exclusion.robots: 0.323
  exclusion.robots.policy: 0.298
  RedisCDXSource: 0.734
  PetaboxLoader3.resolve: 793.743
  load_resource: 864.603
*/

//Main Menu Dropdown

$(".main-menu").click(function(){
    $(".dropdown-menu").slideToggle('1500');
});

// Smooth Scroll - Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
