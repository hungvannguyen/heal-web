document.addEventListener('DOMContentLoaded', function () {
    const navbarDropdowns = document.querySelectorAll('[data-collapse-toggle]');
    let currentOpenDropdown = null;

    navbarDropdowns.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();

            const menuId = button.getAttribute('data-collapse-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const dropdownMenu = document.getElementById(menuId);
            console.log(menuId);
            console.log(dropdownMenu);

            if (currentOpenDropdown && currentOpenDropdown !== dropdownMenu && mobileMenu.classList.contains('show')) {
                currentOpenDropdown.classList.add('hidden');
                console.log('currentOpenDropdown 1', currentOpenDropdown);
            }

            dropdownMenu.classList.toggle('hidden');
            currentOpenDropdown = dropdownMenu.classList.contains('hidden') ? null : dropdownMenu;
        });
    });
});
