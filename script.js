document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

window.addEventListener("load", function () {
    const tree = document.querySelector('.tree');
    const tent = document.querySelector('.tent');

    // Delay for animation effect
    setTimeout(() => {
        tree.classList.add('animate-entry-left');
        tent.classList.add('animate-entry-right');
    }, 100); // small delay to trigger transition
});
