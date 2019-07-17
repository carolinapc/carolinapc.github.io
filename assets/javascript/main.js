var $mainContent;

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function loadHtml(name){
    $mainContent.load(`${name}.html`);
    animateCSS('#main-content', 'zoomIn');
}

function openLink(){
    loadHtml($(this).attr("data-name"));
}

$(document).ready(function() {

    $mainContent = $("#main-content");
    
    loadHtml("about");

    $(".nav-link").click(openLink);

});