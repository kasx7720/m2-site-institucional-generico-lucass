var buttons = document.querySelectorAll(".openModal");
var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".modal-backdrop");
var closeButton = modal.querySelector(".close");

buttons.forEach(function(button) {
    button.onclick = function() {
        modal.showModal();
        backdrop.style.display = 'block';
    }
});

closeButton.onclick = function() {
    modal.close();
    backdrop.style.display = 'none';
}

backdrop.onclick = function() {
    modal.close();
    backdrop.style.display = 'none';
}