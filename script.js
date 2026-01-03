// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList. add('scrolled');
    } else {
        navbar.classList. remove('scrolled');
    }

    // Active nav link on scroll
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger. classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Typing animation
const typingText = document.getElementById('typingText');
const phrases = [
    'Website Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Creative Thinker'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (! isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation
typeText();

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element. getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check

// Counter animation
const counters = document.querySelectorAll('.counter');
let counterAnimated = false;

const animateCounters = () => {
    const aboutSection = document.getElementById('about');
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (aboutTop < windowHeight - 100 && !counterAnimated) {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let count = 0;
            
            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    counter.textContent = Math.ceil(count) + '+';
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target + '+';
                }
            };
            
            updateCounter();
        });
        counterAnimated = true;
    }
};

window.addEventListener('scroll', animateCounters);

// Skill bars animation
let skillsAnimated = false;

const animateSkills = () => {
    const skillsSection = document.getElementById('skills');
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (skillsTop < windowHeight - 100 && !skillsAnimated) {
        const skillProgress = document.querySelectorAll('.skill-progress');
        
        skillProgress.forEach(skill => {
            const progress = skill.getAttribute('data-progress');
            skill.style.width = progress + '%';
        });
        
        skillsAnimated = true;
    }
};

window.addEventListener('scroll', animateSkills);

// Form validation
const contactForm = document.getElementById('contactForm');
const formInputs = {
    name: document.getElementById('name'),
    email: document. getElementById('email'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message')
};

const errorMessages = {
    name: document. getElementById('nameError'),
    email: document.getElementById('emailError'),
    subject: document.getElementById('subjectError'),
    message: document.getElementById('messageError')
};

const formSuccess = document.getElementById('formSuccess');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time validation
Object.keys(formInputs).forEach(key => {
    formInputs[key].addEventListener('blur', () => {
        validateField(key);
    });
    
    formInputs[key]. addEventListener('input', () => {
        if (errorMessages[key]. style.display === 'block') {
            validateField(key);
        }
    });
});

function validateField(fieldName) {
    const field = formInputs[fieldName];
    const error = errorMessages[fieldName];
    
    if (field.value.trim() === '') {
        error.textContent = 'This field is required';
        error.style.display = 'block';
        field.style.borderColor = 'var(--error-color)';
        return false;
    }
    
    if (fieldName === 'email' && ! emailRegex.test(field. value)) {
        error.textContent = 'Please enter a valid email address';
        error.style.display = 'block';
        field.style.borderColor = 'var(--error-color)';
        return false;
    }
    
    if (fieldName === 'message' && field.value.trim().length < 10) {
        error.textContent = 'Message must be at least 10 characters';
        error.style.display = 'block';
        field. style.borderColor = 'var(--error-color)';
        return false;
    }
    
    error.style.display = 'none';
    field.style.borderColor = 'var(--success-color)';
    return true;
}

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    Object.keys(formInputs).forEach(key => {
        if (! validateField(key)) {
            isValid = false;
        }
    });
    
    if (isValid) {
        // Simulate form submission
        const submitButton = contactForm.querySelector('. btn-submit');
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending... ';
        submitButton.disabled = true;
        
        setTimeout(() => {
            formSuccess.style.display = 'block';
            submitButton.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
            submitButton.disabled = false;
            contactForm.reset();
            
            // Reset border colors
            Object.keys(formInputs).forEach(key => {
                formInputs[key]. style.borderColor = 'rgba(102, 126, 234, 0.2)';
            });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        }, 2000);
    }
});

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Scroll to top functionality (optional - you can add a button for this)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Lazy loading for project images (if you add actual images later)
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries. forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry. target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// Add active state to current section in viewport
const observerOptions = {
    threshold:  0.3,
    rootMargin: '-100px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

console.log('Portfolio loaded successfully!  🚀');