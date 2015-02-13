'use strict';

window.addEventListener('load', function () {
    var tip_triggers = document.getElementsByClassName('tip-trigger');
    var tip_closers = document.getElementsByClassName('tip__close');

    for (var i = 0; i < tip_triggers.length; i++) {
        tip_triggers[i].addEventListener('click', function () {
            var the_tip = this.parentNode.getElementsByClassName('tip')[0];
            the_tip.classList.add('tip--visible');
        });

        tip_closers[i].addEventListener('click', function () {
            var the_tip = this.parentNode.parentNode.getElementsByClassName('tip')[0];
            the_tip.classList.remove('tip--visible');
        });

    }
});
