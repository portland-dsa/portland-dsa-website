
// ====================
// = Helper functions =
// ====================
function isMobile()
{
  return ( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      );
}



// ========================
// = Fire on-load, Part 1 =
// ========================
// This accommodates for async loading

// If page has already loaded, run our stuff
if (document.readyState !== "loading") doMeWhenReady();
// Otherwise wait for DOM to be ready, then run our stuff
else document.addEventListener("DOMContentLoaded", function(){ doMeWhenReady() });

// ========================
// = Fire on-load, Part 2 =
// ========================
// Put onload stuff inside this function
function doMeWhenReady()
{



// Toggle mobile menu
// -----------------------------------
var clickableToggle = document.querySelector(".nav__toggleButton");
var changingNavElement = ( document.querySelector(".header--isOpenedMenu") ? document.querySelector(".header--isOpenedMenu") : document.querySelector(".header--isClosedMenu") );

function toggleMobileNavMenu( isForceClosed )
{
  var openClassname   = 'header--isOpenedMenu';
  var closedClassname = 'header--isClosedMenu';

  if ( changingNavElement.className == openClassname || isForceClosed )
    {
    // Set button label and class
    clickableToggle.innerHTML    = 'Menu';
    changingNavElement.className = closedClassname;

    // Remove no content shift div (see scss/shared/global.scss for details)
    noContentShiftDiv = document.querySelector('.noContentShiftDiv');
    if ( noContentShiftDiv )
      {
      noContentShiftDiv.parentNode.removeChild( noContentShiftDiv );
      }
    }
  else
    {
    // Set button label and class
    clickableToggle.innerHTML    = 'Close';
    changingNavElement.className = openClassname;

    // Add no content shift div (see scss/shared/global.scss for details)
    var noContentShiftDiv = document.createElement( 'div' );
        noContentShiftDiv.className = 'noContentShiftDiv';
    document.body.insertBefore( noContentShiftDiv, document.querySelector('header') );
    }
}


// Toggle mobile menu - event binding
// -----------------------------------
clickableToggle.onclick = function() {
  toggleMobileNavMenu();
  return false;
};


// Close mobile nav menu if window is resized larger
// -----------------------------------
window.addEventListener('resize', function (){
  // Thanks sidonaldson: http://stackoverflow.com/a/11744120
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  // Use value of $breakpointTablet in scss/include/_variables.scss
  var windowLargerThan = 768;
  if ( x > windowLargerThan ) toggleMobileNavMenu( 'closed' );
});



} // /doMeWhenReady
