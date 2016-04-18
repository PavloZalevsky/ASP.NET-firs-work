function OnBtnShowClick()
{
    Hide();
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


function Hide() {
    document.getElementById("show").style.display = "none";
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "none";
}