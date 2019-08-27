document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.remove('dark') : document.querySelector('body').classList.add('dark')
  })

$(document).ready(function () {

    var $menuButton = $('.menuButton');
    var $nav = $('nav');
    var $body = $('body');
    var $logo = $('#logo');

    $menuButton.on('click', function () {
        $(this).toggleClass('open');
        $logo.toggleClass('menuOpen');
        $nav.toggleClass('open');
        $body.toggleClass('menuOpen');
        return false;
    });

    $logo.on('click', function(){
        localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'light' ? 'dark' : 'light'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.remove('dark') : document.querySelector('body').classList.add('dark')
    });

    var s = skrollr.init({forceHeight: false});

});