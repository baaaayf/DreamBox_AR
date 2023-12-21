
$(window).on("deviceorientation resize", function( event ) {
    if (window.matchMedia("(orientation: landcape)").matches) {
        $('.overlay-portrait').removeClass('active');
        $('.overlay-portrait-modal').removeClass('active');
    }
    if (window.matchMedia("(orientation: portrait)").matches) {
        $('.overlay-portrait').addClass('active');
        $('.overlay-portrait-modal').addClass('active');
    }
});