function toggleMenu(element) {
    element.classList.toggle('active');
    document.getElementById('mobile-navbar').classList.toggle('active');
}

document.querySelectorAll('.mobile-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-navbar').classList.remove('active');
    });
});