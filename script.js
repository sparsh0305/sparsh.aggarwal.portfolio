// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Product Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate Name
            const nameInput = document.getElementById('name');
            const nameError = nameInput.nextElementSibling;
            
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            // Validate Email
            const emailInput = document.getElementById('email');
            const emailError = emailInput.nextElementSibling;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required';
                isValid = false;
            } else if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Validate Message
            const messageInput = document.getElementById('message');
            const messageError = messageInput.nextElementSibling;
            
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required';
                isValid = false;
            } else {
                messageError.textContent = '';
            }
            
            // If form is valid, submit (or simulate submission)
            if (isValid) {
                // For demo purposes, just show an alert
                alert('Message sent successfully!');
                contactForm.reset();
            }
        });
    }
    
    // Scroll Animation for Elements
    const scrollElements = document.querySelectorAll('.about-image, .about-text, .product-card');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementHeight = el.offsetHeight;
        const windowHeight = window.innerHeight;
        
        return (
            elementTop <= windowHeight * (percentageScroll / 100) &&
            elementTop + elementHeight >= 0
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 80)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Add scroll animation class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .about-image, .about-text, .product-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .scrolled {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Initialize scroll animation
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Trigger once on load
    handleScrollAnimation();
});
