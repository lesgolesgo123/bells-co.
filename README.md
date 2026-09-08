# Bells & Co. — E-Commerce Web Platform

**Bells & Co.** is a modern, responsive e-commerce web platform designed for a semi-luxury apparel brand. The platform combines a clean, modern aesthetic with vintage charm to deliver a seamless shopping experience across devices while supporting a social mission—donating partial profits to charity.

## Project Overview

This project was developed as part of the **Web Fundamentals (WEB1201 / WEB2014)** course at Sunway University. The primary goal was to design and implement an intuitive, visually polished e-commerce interface featuring dynamic shopping cart management, interactive product filtering, robust form validation, and responsive page layouts.

## Key Features

* **Minimalist Semi-Luxury Aesthetic:** Clean off-white/warm color palette, elegant typography (`Playfair Display`, `Crimson Text`), and non-overstimulating visual hierarchy.

* **Filterable Product Catalog:** Instant client-side product filtering by categories (*Sweaters*, *Pajamas*, *Dresses/Shirts*) using dynamic DOM manipulation.

* **Dual-Perspective Hover Effects:** Product cards show alternative angles/perspectives when hovered (`.firstversion` / `.secondversion`).

* **Dynamic LocalStorage Shopping Cart:**
* Real-time cart state persistence across page refreshes via `localStorage` (`bellsShoppingCart`)
* Dynamic subtotal, tax (6%), and conditional shipping calculation (Free shipping over RM200).
* Quantity management and item removal with instant UI re-rendering.
* Checkout modal summary generation and automated cart clearance.


* **Interactive Authentication Forms:**
  
* **Sign Up & Log In:** Client-side input validation using JavaScript regular expressions for emails and password length checks.
* Interactive password visibility toggle (Show/Hide).
* Social login shortcuts and "Remember Me" options.

* **Validated Contact & Support System:** Custom contact form with strict field validations (regex matching, digit-only phone validation, character limits).

* **Fully Responsive Design:** Cross-device compatibility powered by CSS Grid and Flexbox, optimized and hosted for mobile viewports.

* **Team Portfolio Integration:** Dedicated "Meet the Team" showcase linking directly to individual developer portfolio pages.



## Tech Stack & Concepts

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Layout Techniques:** CSS Grid (`grid-template-columns: repeat(3, 1fr)`), Flexbox (`display: flex`)
* **State Management:** Browser `localStorage` & JSON parsing
* **Form Validation:** Dynamic DOM events, Regex pattern matching
* **Deployment & Hosting:** Netlify / GitHub Pages

## Project Structure

├── index.html              # Main Landing Page (Hero video, New Arrivals, Best Sellers)
├── women.html              # Women's Collection Catalog
├── men.html                # Men's Collection Catalog
├── kids.html               # Children's Collection Catalog
├── cart.html               # Shopping Cart & Checkout System
├── login.html              # Member Login Page
├── signup.html             # Member Sign Up Page
├── contact.html            # Contact & Support Form
├── faqs.html               # Frequently Asked Questions
├── termsandcondition.html # Terms & Conditions Policy
├── deliveryandreturns.html# Shipping & Returns Information
├── OurStory.html           # Brand Story & Mission Statement
├── JoinUs.html             # Career Openings & Application Form
├── Meettheteam.html        # Team Member Showcase Page
├── chelsea-portfolio.html  # Developer Portfolio - Chelsea
├── fatima-portfolio.html   # Developer Portfolio - Fatima
├── thanesh-portfolio.html  # Developer Portfolio - Thanesh
└── assets/                 # Images, Videos, Logos, and CSS stylesheets

## Contributors & Responsibilities

* **Fatima Abdullah (Chief Technology Officer):** Designed & implemented the JavaScript Shopping Cart system, Sign Up & Log In pages with dynamic form validation, and LocalStorage state logic.
* **Chelsea Choo Minshe (Chief Executive Officer):** Designed & coded the Main Home Page, Navigation Bar, and foundational Women's Collection catalog layout.
* **Thanesh Sridharan (Chief Marketing Officer):** Coded the "Meet the Team" page, Footer ecosystem (FAQs, Terms, Delivery, Contact form), and designed branding logos.

## Getting Started

### Prerequisites
All you need is a modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).

### Local Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/bells-and-co.git](https://github.com/your-username/bells-and-co.git)

2. Navigate to Project directory
   ```bash
   cd bells-and-co
   
3. Open index.html in your web browser or run it using Live Server in VS Code.

## License
This project was built for academic assessment purposes under the Faculty of Engineering and Technology, Sunway University. All rights reserved.
