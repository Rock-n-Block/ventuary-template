import $ from '../plugins/jquery/dist/jquery.min';

var menuToggle = false;

$(document).ready(() => {
    console.log('ready')
    $('.header-menu-toggle').click(function () {
        console.log('toggle menu')
        if (!menuToggle) $('.header-wrap').addClass('header-menu-show');
        if (menuToggle) $('.header-wrap').removeClass('header-menu-show');
    });
});

$(document).scroll(() => {
    window.scrollY > 60 ? ($('header').addClass('header-fixed')) : ($('header').removeClass('header-fixed'));
});