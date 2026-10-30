const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

function setMenu(open) {
    siteNav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? 'Close' : 'Menu';
}

menuToggle.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
});

// Highlight the current section in the nav
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
    });
}, { rootMargin: '-30% 0px -60% 0px' });

document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

// Copy email button
const copyButton = document.getElementById('copyEmail');
const copyStatus = document.getElementById('copyStatus');

copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.email;
    try {
        await navigator.clipboard.writeText(email);
        copyStatus.textContent = 'Copied!';
    } catch (error) {
        copyStatus.textContent = email;
    }
    setTimeout(() => { copyStatus.textContent = ''; }, 3000);
});

document.getElementById('year').textContent = new Date().getFullYear();