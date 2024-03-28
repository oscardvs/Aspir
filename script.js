document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.querySelector('.flashing-background').style.display = 'none';
        document.querySelector('.loader').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000); // Adjust time as needed for your loading animation
});