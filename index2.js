<script>
// JavaScript for smooth scrolling
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 85, // Adjust the offset as needed
                behavior: 'smooth',
            });
        }
    });
});
</script>