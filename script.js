document.addEventListener("DOMContentLoaded", () => {
  // Navigation functionality
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")
  const navbar = document.getElementById("navbar")
  const navLinks = document.querySelectorAll(".nav-link")

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Menu filtering functionality
  const filterButtons = document.querySelectorAll(".filter-btn")
  const menuItems = document.querySelectorAll(".menu-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")

      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      // Improved filtering logic to properly hide/show items
      menuItems.forEach((item, index) => {
        const category = item.getAttribute("data-category")

        if (filter === "all" || category === filter) {
          item.classList.remove("hidden")
          // Add staggered animation for visible items
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "scale(1)"
          }, index * 100)
        } else {
          // Immediately hide non-matching items
          item.classList.add("hidden")
          item.style.opacity = "0"
          item.style.transform = "scale(0.8)"
        }
      })
    })
  })

  // Form handling
  const orderForm = document.getElementById("order-form")

  orderForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const formData = new FormData(this)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const order = formData.get("order")

    // Basic validation
    if (!name || !email || !phone || !order) {
      showNotification("Please fill in all fields", "error")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      showNotification("Please enter a valid email address", "error")
      return
    }

    // Simulate form submission
    showNotification("Order submitted successfully! We'll contact you soon.", "success")
    this.reset()
  })

  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll(".add-to-cart")

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const menuItem = this.closest(".menu-item")
      const itemName = menuItem.querySelector("h3").textContent
      const itemPrice = menuItem.querySelector(".price").textContent

      showNotification(`${itemName} (${itemPrice}) added to cart!`, "success")

      // Add animation effect
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1.05)"
      }, 100)
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 200)
    })
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".menu-item, .about-content, .contact-info, .contact-form")
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Smooth scrolling function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 80 // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

// Notification system
function showNotification(message, type = "success") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  // Create new notification
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message

  document.body.appendChild(notification)

  // Show notification
  setTimeout(() => {
    notification.classList.add("show")
  }, 100)

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show")
    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 3000)
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href").substring(1)
    scrollToSection(targetId)
  })
})
