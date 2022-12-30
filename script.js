const checkBox = document.getElementById("menu_checkbox");

const dropDownMenu = document.querySelector(".menu-dropdown");

function toggleMenu() {
    if(checkBox.checked == true) {
        dropDownMenu.classList.add("active");
    } else {
        dropDownMenu.classList.remove("active");
    }
}