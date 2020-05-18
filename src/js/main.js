import $ from '../plugins/jquery/dist/jquery.min.js';

var menuToggle = false;

$(document).ready(() => {
    $('.header-menu-toggle').click(function () {
        console.log('toggle menu')
        if (!menuToggle) $('.header-wrap').addClass('header-menu-show');
        if (menuToggle) $('.header-wrap').removeClass('header-menu-show');
    });

    // Array.from(document.getElementsByClassName("section")).forEach(
    //     function (element, index, array) {
    //         element.style.minHeight = element.children[0].clientHeight + 'px';
    //     }
    // );

});

$(document).scroll(() => {
    window.scrollY > 60 ? ($('header').addClass('header-fixed')) : ($('header').removeClass('header-fixed'));
    // parallaxScroll();
});

// function parallaxScroll() {
//     const scrolled = $(window).scrollTop();
//     $('#header').css('top', (0 - (scrolled * .10)) + 'px');
//     $('#first').css('top', (0 - (scrolled * .10)) + 'px');
//     $('#second').css('top', (0 - (scrolled * .20)) + 'px');
//     $('#third').css('top', (0 - (scrolled * .30)) + 'px');
//     $('#four').css('top', (0 - (scrolled * .40)) + 'px');
//     $('#five').css('top', (0 - (scrolled * .50)) + 'px');
//     $('#six').css('top', (0 - (scrolled * .60)) + 'px');
// }