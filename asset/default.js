;(function(){
    function domReady() {
        console.warn('dom is Ready');
    }

    function reset() {
        console.warn('dom is loaded');
    }

    document.addEventListener('DOMContentLoaded', domReady) 
    window.addEventListener('load', reset)
}())