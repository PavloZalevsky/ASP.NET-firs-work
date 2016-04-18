function OnBtnShowClick() {
    Hide();
    Show();
    document.getElementById("show").style.display = "block";
}
function OnBtnAddClick() {
    Hide();
    document.getElementById("add").style.display = "block";
}
function OnBtnRecmoveClick() {
    Hide();
    document.getElementById("remove").style.display = "block";
}

var uri = 'api/products';
function Show() {
 
    $(document).ready(function () {
        $.getJSON(uri)
             .done(function (data) {
                 $.each(data, function (key, item) {
                     // Add a list item for the product.
                     $('<li>', { text: formatItem(item) }).appendTo($('#products'));
                 })
             });
    });
}

function find() {
    var id = $('#prodId').val();
    $.getJSON(uri + '/' + id)
        .done(function (data) {
            $('#product').text(formatItem(data));
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#product').text('Error: ' + err);
        });
}
function formatItem(item) {
    return item.Name + ': $' + item.Price;
}




function Hide() {
    document.getElementById("show").style.display = "none";
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "none";
}