document.addEventListener('DOMContentLoaded', function () {
    const navbarDropdowns = document.querySelectorAll('[data-collapse-toggle]');
    let currentOpenDropdown = null;

    navbarDropdowns.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();

            const menuId = button.getAttribute('data-collapse-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const collapsibleElements = document.getElementsByClassName('collapsible');
            const dropdownMenu = document.getElementById(menuId);
            console.log(menuId);
            console.log(dropdownMenu);
            if (currentOpenDropdown && currentOpenDropdown !== dropdownMenu && mobileMenu.classList.contains('hidden') || !mobileMenu.classList.contains('lg:hidden')) {
                currentOpenDropdown.classList.add('hidden');
                console.log('currentOpenDropdown 1', currentOpenDropdown);
            }

            if (dropdownMenu && dropdownMenu.classList.contains('collapse-target')) {
                // In ra các lớp của dropdownMenu trước khi kiểm tra điều kiện
                console.log('Before toggle classes:', dropdownMenu.classList);

                // Toggle các lớp ngay lập tức
                if (!dropdownMenu.classList.contains('flex') && !dropdownMenu.classList.contains('flex-wrap') && dropdownMenu.classList.contains('hidden')) {
                    console.log('targetList true', dropdownMenu);
                    dropdownMenu.classList.remove('hidden');
                    dropdownMenu.classList.add('flex-wrap');
                } else {
                    console.log('targetList false', dropdownMenu);
                    dropdownMenu.classList.remove('flex-wrap');
                    dropdownMenu.classList.add('hidden');
                }

                // In ra các lớp của dropdownMenu sau khi kiểm tra điều kiện
                console.log('After toggle classes:', dropdownMenu.classList);
            }

            if(dropdownMenu && !dropdownMenu.classList.contains('collapse-target')){
                dropdownMenu.classList.toggle('hidden');
            }

            currentOpenDropdown = dropdownMenu.classList.contains('hidden') ? null : dropdownMenu;
        });
    });
});
