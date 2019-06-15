$( ".lister-list" ).sortable({
    opacity: 0.5,
    placeholder: "imdb-sort-item",
    update: function(){
        $('.lister-list .lister-item').each(function(key, value) {
            var position_input = $(value).find('.element-position-input');
            key += 1;
            position_input.val(key)
            $('.lister-save-order').removeClass('disabled')
        })
    }
});