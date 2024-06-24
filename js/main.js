document.addEventListener('DOMContentLoaded', function () {

    // Drop down
    const navbarDropdowns = document.querySelectorAll('[data-collapse-toggle]');

    let currentOpenDropdown = null;
    let activeItems = {};

    navbarDropdowns.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();

            const menuId = button.getAttribute('data-collapse-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const collapsibleElements = document.getElementsByClassName('collapsible');
            const dropdownMenu = document.getElementById(menuId);
            const dataValues = dropdownMenu.querySelectorAll('[data-value]');

            // Search-box dropdown
            dataValues.forEach(dataValue => {
                dataValue.addEventListener('click', function (event) {
                    event.stopPropagation();
                    const dataValueId = dataValue.getAttribute('data-value');

                    const placeholder = button.querySelector('.search-box-dropdown-placeholder');

                    placeholder.textContent = dataValueId;

                        if (!activeItems[menuId]) {

                            activeItems[menuId] = dataValueId;

                        } else {
                            delete activeItems[menuId];
                            activeItems[menuId] = dataValueId;

                            dataValues.forEach(dataValue => {
                                dataValue.classList.remove('bg-quaternary');
                            });
                        }

                    dataValue.classList.add('bg-quaternary');

                    dropdownMenu.classList.add('hidden');
                }
                )
            });

            if (currentOpenDropdown && currentOpenDropdown !== dropdownMenu && mobileMenu.classList.contains('hidden') || !mobileMenu.classList.contains('lg:hidden')) {
                currentOpenDropdown.classList.add('hidden');

            }

            if (dropdownMenu && dropdownMenu.classList.contains('collapse-target')) {

                if (!dropdownMenu.classList.contains('flex') && !dropdownMenu.classList.contains('flex-wrap') && dropdownMenu.classList.contains('hidden')) {
                    dropdownMenu.classList.remove('hidden');
                    dropdownMenu.classList.add('flex-wrap');
                } else {
                    dropdownMenu.classList.remove('flex-wrap');
                    dropdownMenu.classList.add('hidden');
                }
            }

            if(dropdownMenu && !dropdownMenu.classList.contains('collapse-target')){
                dropdownMenu.classList.toggle('hidden');
            }


            currentOpenDropdown = dropdownMenu.classList.contains('hidden') ? null : dropdownMenu;
        });
    });

});
