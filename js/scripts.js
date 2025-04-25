        // Mobile Menu Toggle
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navMenu = document.querySelector('.nav-menu');

        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Testimonial Slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');

        testimonialDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = dot.getAttribute('data-slide');

                // Remove active class from all slides and dots
                testimonialSlides.forEach(slide => {
                    slide.classList.remove('active');
                });

                testimonialDots.forEach(dot => {
                    dot.classList.remove('active');
                });

                // Add active class to selected slide and dot
                testimonialSlides[slideIndex].classList.add('active');
                dot.classList.add('active');
            });
        });

        // Auto slide testimonials
        let currentSlide = 0;
        const testimonialInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;

            // Remove active class from all slides and dots
            testimonialSlides.forEach(slide => {
                slide.classList.remove('active');
            });

            testimonialDots.forEach(dot => {
                dot.classList.remove('active');
            });

            // Add active class to current slide and dot
            testimonialSlides[currentSlide].classList.add('active');
            testimonialDots[currentSlide].classList.add('active');
        }, 5000);

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                }
            });
        });