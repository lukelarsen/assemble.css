// Modal Set Up
$('.modal').css('display','block');
$('.modal-overlay').css('display','block');
$('.modal-trigger').modalEffects();


$(document).ready(function() {
    $(window).on('resize', function(){
        // Get the window height
        var windowHeight = $( window ).height();

        // Get the space from top of the window to the modal
        var modal = $('.modal');
        var offset = modal.offset();

        // Get the modal header and footer height
        var modalHeaderHeight = $( ".modal__header" ).outerHeight(true);
        var modalFooterHeight = $( ".modal__footer" ).outerHeight(true);
        var modalHeaderFooterHeight = modalHeaderHeight + modalFooterHeight;

        // Calculate the max-height of the modal body
        var modalBodyHeight = windowHeight - modalHeaderFooterHeight - (offset.top * 2);

        // Set max-heght of the modal body
        $('.modal__body').css('max-height', modalBodyHeight);
    }).trigger('resize'); //on page load
});