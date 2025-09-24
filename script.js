/* Global Styles */
:root {
    --primary-color: #FFFFFF;
    --text-color: #333333;
    --accent-color: #1E90FF;
    --secondary-bg: #f8f8f8;
    --footer-bg: #f1f1f1;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--primary-color);
    overflow-x: hidden;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

h1, h2, h3 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
}

a {
    text-decoration: none;
    color: var(--text-color);
    transition: var(--transition);
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

section {
    padding: 80px 0;
}

/* Navigation Bar */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 15px 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo a {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-color);
}

.logo a:hover {
    color: var(--accent-color);
}

.nav-links ul {
    display: flex;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    font-weight: 500;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-color);
    transition: var(--transition);
}

.nav-links a:hover::after,
.nav-links a.active::after {
    width: 100%;
}

.hamburger {
    display: none;
    cursor: pointer;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--text-color);
    transition: var(--transition);
}

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--primary-color);
    padding: 0 20px;
}

.hero-content {
    max-width: 800px;
}

.headline {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateX(-50px);
    animation: fadeInLeft 1s forwards 0.5s;
}

.subheading {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeIn 1s forwards 1s;
}

.cta-button {
    display: inline-block;
    background-color: var(--accent-color);
    color: var(--primary-color);
    padding: 12px 30px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: var(--transition);
    opacity: 0;
    animation: fadeIn 1s forwards 1.5s;
}

.cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(30, 144, 255, 0.5);
}

/* About Section */
.about .container {
    display: flex;
    align-items: center;
    gap: 50px;
}

.about-image {
    flex: 1;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-image img {
    transition: transform 0.8s ease;
}

.about-image:hover img {
    transform: scale(1.05);
}

.about-text {
    flex: 1;
}

.about-text h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
}

.about-text p {
    margin-bottom: 1rem;
}

/* Collection Section */
.collection {
    background-color: var(--secondary-bg);
}

.collection h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.filter-buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.filter-btn {
    background: none;
    border: none;
    padding: 8px 20px;
    margin: 0 10px 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    border-radius: 20px;
}

.filter-btn:hover,
.filter-btn.active {
    background-color: var(--accent-color);
    color: var(--primary-color);
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}

.product-card {
    background-color: var(--primary-color);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.product-image {
    height: 300px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.product-card:hover .product-image img {
    transform: scale(1.1);
}

.product-info {
    padding: 20px;
}

.product-info h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.price {
    font-weight: 600;
    color: var(--accent-color);
    font-size: 1.1rem;
}

/* Contact Section */
.contact h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.contact-content {
    display: flex;
    gap: 50px;
}

.contact-info,
.contact-form {
    flex: 1;
}

.info-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
}

.info-item i {
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-right: 15px;
}

.social-links {
    margin-top: 2rem;
}

.social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--secondary-bg);
    color: var(--text-color);
    margin-right: 10px;
    transition: var(--transition);
}

.social-icon:hover {
    background-color: var(--accent-color);
    color: var(--primary-color);
    transform: translateY(-3px);
}

.form-group {
    margin-bottom: 1.5rem;
    position: relative;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--accent-color);
    outline: none;
    box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.2);
}

.form-group textarea {
    height: 150px;
    resize: vertical;
}

.error-message {
    color: #ff3333;
    font-size: 0.85rem;
    position: absolute;
    bottom: -20px;
    left: 0;
}

.submit-btn {
    background-color: var(--accent-color);
    color: var(--primary-color);
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
}

.submit-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(30, 144, 255, 0.5);
}

/* Footer */
footer {
    background-color: var(--footer-bg);
    padding: 30px 0;
    text-align: center;
}

footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-social .social-icon {
    background-color: #e5e5e5;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 992px) {
    .about .container {
        flex-direction: column;
    }
    
    .about-image, .about-text {
        width: 100%;
    }
    
    .contact-content {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .navbar {
        padding: 10px 0;
    }
    
    .nav-links {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background-color: var(--primary-color);
        flex-direction: column;
        transition: var(--transition);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }
    
    .nav-links.active {
        left: 0;
    }
    
    .nav-links ul {
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-top: 30px;
    }
    
    .nav-links li {
        margin: 15px 0;
    }
    
    .hamburger {
        display: block;
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    
    .headline {
        font-size: 2.5rem;
    }
    
    .subheading {
        font-size: 1.2rem;
    }
    
    section {
        padding: 60px 0;
    }
    
    .product-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    
    footer .container {
        flex-direction: column;
        gap: 15px;
    }
}

@media (max-width: 480px) {
    .headline {
        font-size: 2rem;
    }
    
    .filter-btn {
        margin: 0 5px 10px;
        padding: 6px 15px;
        font-size: 0.9rem;
    }
    
    .product-grid {
        grid-template-columns: 1fr;
    }
}
