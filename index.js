$(function() {
    $('.addButton').on('click', e => {
        
        e.preventDefault();
        
        if ($('#shopping-list-entry').val() !== ""){
            
            $('.shopping-list').append('<li><span class="shopping-item">' + $('#shopping-list-entry').val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
            $('#shopping-list-entry').val("");
        }
        else {
            alert("Please enter an item into the text box!");
        }
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        // $(this).parent().parent().find('.shopping-item').hide();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });


    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
});