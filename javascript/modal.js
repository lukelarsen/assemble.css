// Modal Set Up
$('.modal').css('display','block');
$('.modal-overlay').css('display','block');
$('.modal-trigger').modalEffects();


$(document).ready(function() {

    // Adjust modal body based on widow size
    $(window).on('resize', function(){
        // Get the window height
        var windowHeight = $(window).height();

        // Get the space from top of the window to the modal
        var modal_offset = $('.modal').offset();
        var modal_overlay_offset = $('.modal-overlay').offset();
        var modal_space = modal_offset.top - modal_overlay_offset.top;

        // Get the modal header and footer height
        var modalHeaderHeight = $('.modal__header').outerHeight(true);
        var modalFooterHeight = $('.modal__footer').outerHeight(true);
        var modalHeaderFooterHeight = modalHeaderHeight + modalFooterHeight;

        // Calculate the max-height of the modal body
        var modalBodyHeight = windowHeight - modalHeaderFooterHeight - (modal_space * 2);

        // Set max-heght of the modal body
        $('.modal__body').css('max-height', modalBodyHeight);
    }).trigger('resize'); //on page load

});