function openSidebar() {
    document.querySelector('.links').style.display = 'flex';
    document.querySelector('.links ul').style.display = 'flex';
}

function closeSidebar() {
    document.querySelector('.links').style.display = 'none';
    document.querySelector('.links ul').style.display = 'none';
}

function initializeSidebar() {
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const closeSidebarBtn = document.querySelector('.closebtn');

    openSidebarBtn.addEventListener('click', openSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);
}

document.addEventListener('DOMContentLoaded', initializeSidebar);

// POPUP

document.addEventListener('DOMContentLoaded', function () {
    var orderBtns = document.querySelectorAll('.orderBtn');
    var popup = document.getElementById('orderFormPopup');
    var closeBtn = document.querySelector('.close-btn');
    var itemInput = document.getElementById('item');

    orderBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var product = this.parentElement.getAttribute('data-product');
            itemInput.value = product;
            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
