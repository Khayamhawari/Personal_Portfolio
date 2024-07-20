const menuOpen = document.getElementById('open-menu');
        const navBar = document.getElementById('main-nav');

        menuOpen.addEventListener('click', () => {
            menuOpen.classList.toggle('openmenu');
            navBar.classList.toggle('active');
        });