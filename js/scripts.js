// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Testimonial Carousel
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.carousel-nav .prev');
const nextButton = document.querySelector('.carousel-nav .next');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}, 5000);

// Contact Form Submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        service: formData.get('service'),
        message: formData.get('message'),
    };
    console.log('Form Submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
});