// Fade-in effect
const faders = document.querySelectorAll('.fade');
const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


// Secret trigger click
const secretTrigger = document.getElementById('secret-trigger');
if (secretTrigger) {
    secretTrigger.addEventListener('click', () => {
        // Redirect to secret page
        window.location.href = "/the-place-you-never-asked-for";
    });

    // Optional: increase opacity slightly on hover
    secretTrigger.addEventListener('mouseenter', () => {
        secretTrigger.style.opacity = 0.5;
    });
    secretTrigger.addEventListener('mouseleave', () => {
        secretTrigger.style.opacity = 0.2;
    });
}
