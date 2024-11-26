document.querySelectorAll('.pic').forEach((pic) => {
    pic.addEventListener('click', () => {
        document.body.style.overflow = "hidden"; // Disable scrolling
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = 'flex';
        modalImg.src = pic.src;
    });
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = "auto"; // Enable scrolling
});

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.getElementById('modal').style.display = 'none';
        document.body.style.overflow = "auto"; // Enable scrolling
    }
});