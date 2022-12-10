var nav = document.getElementById('bannernav');
window.onscroll = function() {
    if(window.pageYOffset > 100) {
        nav.style.position = "fixed" ;
        nav.style.top = 0;
    }
    else {
        nav.style.position = 'relative';
        nav.style.top = 100;
    }
}