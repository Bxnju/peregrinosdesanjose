function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage');

    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modalImg.style.animation = 'appear .5s ease-in-out';
    modalImg.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Cerrar modal haciendo clic fuera de la imagen
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}