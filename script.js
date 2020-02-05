'use strict';
// Управление отображением элементами интерфейса
document.addEventListener("DOMContentLoaded", function() {
    //styles
    /* let aside = document.getElementsByTagName('aside')[0],
    main = document.getElementsByTagName('main')[0];
    aside.style.top = '60px';
    main.style.top = '60px'; */
    
    // active and deactive navigation panel
    document.getElementById('header__trigger').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.header__trigger').classList.toggle('active'); 
        document.querySelector('.nav').classList.toggle('active');
        document.querySelector('main').classList.toggle('active'); 
    });

    // Tabs
    // Documents - tabs
    document.querySelectorAll('[data-tabs]').forEach(function(element){
        element.addEventListener("click" , function(e) {
            e.preventDefault();

            // tabs
            if(!element.classList.contains('active')) {
                if(document.querySelector('.li-content.active'))
                    document.querySelector(".li-content.active").classList.remove('active');
                element.classList.add('active');
            } 

            //content
            if(document.querySelector('.component.active'))
                document.querySelector(".component.active").classList.remove('active');   
            document.querySelector('.' + this.dataset.tabs).classList.add('active');
        });
    });
});