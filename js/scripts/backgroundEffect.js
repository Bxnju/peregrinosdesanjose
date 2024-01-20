document.addEventListener('scroll', function () {
    const bg = document.querySelector('.curved-bg');
    const scrollPosition = window.pageYOffset;

    bg.style.backgroundPositionY = `${scrollPosition / 3}px`;
});
