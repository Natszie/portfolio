# Professional Portfolio Website - Nathaniel Arquiza

A modern, responsive personal portfolio website showcasing web development projects, skills, and professional experience. Built with HTML5, CSS3, and vanilla JavaScript featuring smooth animations and interactive elements. 

🌐 **Live Demo:** [View Website](https://natszie.github.io/portfolio/)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Sections Overview](#sections-overview)
- [Installation & Setup](#installation--setup)
- [Customization Guide](#customization-guide)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Contact](#contact)
- [License](#license)

## ✨ Features

- 🎨 **Modern Dark Theme** - Eye-catching gradient design with purple/blue color scheme
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ✨ **Smooth Animations** - Scroll-triggered animations and transitions
- ⌨️ **Dynamic Typing Effect** - Animated role descriptions in hero section
- 📊 **Animated Skill Bars** - Visual representation of technical proficiencies
- 🎯 **Interactive Project Cards** - Hover effects and project categorization (Live/Sample)
- 📧 **Contact Form with Validation** - Real-time form validation with error messages
- 🔗 **Social Media Integration** - Links to GitHub, LinkedIn, and email
- 🍔 **Mobile Hamburger Menu** - Smooth mobile navigation
- 🎭 **Scroll Progress Indicators** - Active navigation states based on scroll position
- ⚡ **Performance Optimized** - Lightweight and fast-loading

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox, Grid, and CSS Variables
- **JavaScript (ES6+)** - Vanilla JS for all interactions and animations

### Libraries & Resources
- **Font Awesome 6. 4.0** - Icon library
- **Google Fonts (Poppins)** - Typography
- **Intersection Observer API** - Scroll animations
- **CSS Animations** - Keyframe animations

### Development Tools
- HTML5 Semantic Elements
- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- Modern JavaScript (No frameworks)

## 📄 Sections Overview

### 1. **Navigation Bar**
- Sticky header with scroll effect
- Smooth scrolling to sections
- Active state indicators
- Responsive hamburger menu

### 2. **Hero Section**
- Dynamic typing animation with multiple roles
- Call-to-action buttons
- Social media links
- Animated scroll-down indicator

### 3. **About Me**
- Professional introduction
- Project and experience statistics with animated counters
- Profile image placeholder
- Highlights web and mobile development experience

### 4. **Skills**
- Visual skill cards with icons
- Animated progress bars showing proficiency levels
- Technologies:  HTML5 (95%), CSS3 (90%), JavaScript (85%), Flutter (65%)

### 5. **Projects**
- **Featured Project:** ICTRL - Parental Control App (Live Flutter project)
- **Sample Projects:** 
  - Crafts Cafe Website
  - TeaCubs Cafe Website
  - Personal Portfolio (recursive!)
- Project badges (Live/Sample)
- Technology tags
- Live demo and GitHub links

### 6. **Contact**
- Contact information display
- Validated contact form
- Email:  nathanielcarquiza@gmail.com
- Phone: +639569168510
- Location: Guimba Nueva Ecija, Philippines

### 7. **Footer**
- Copyright information
- Social media links
- Consistent branding

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser
- Text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML/CSS/JS

### Quick Start

1. **Clone or Download**
   ```bash
   git clone https://github.com/Natszie/portfolio.git
   cd portfolio
   ```

2. **File Structure**
   ```
   portfolio/
   ├── index. html          # Main HTML file
   ├── styles.css          # All CSS styles
   ├── script.js           # JavaScript functionality
   ├── images/             # Project images folder
   │   ├── profile.jpg
   │   ├── ictrl.png
   │   ├── crafts-cafe-screenshot.jpg
   │   ├── teacubs-screenshot.jpg
   │   └── portfolio-screenshot.jpg
   └── README.md           # Documentation
   ```

3. **Add Your Images**
   - Create an `images` folder
   - Add your profile picture as `profile.jpg`
   - Add project screenshots

4. **Open in Browser**
   - Simply double-click `index.html`, or
   - Right-click → Open with → Your browser, or
   - Use Live Server extension in VS Code

## 🎨 Customization Guide

### Update Personal Information

#### **1. Hero Section (Lines 31-42 in index.html)**
```html
<h1>Hi, I'm <span class="highlight">Your Name</span></h1>
```

#### **2. Typing Animation Roles (Lines 58-62 in script.js)**
```javascript
const phrases = [
    'Your Role 1',
    'Your Role 2',
    'Your Role 3',
    'Your Role 4'
];
```

#### **3. About Section (Lines 64-72 in index.html)**
Update your bio and experience details. 

#### **4. Contact Information (Lines 253-268 in index.html)**
```html
<p>your-email@gmail.com</p>
<p>+63XXXXXXXXXX</p>
<p>Your Location</p>
```

#### **5. Social Media Links**
Update all instances of: 
- GitHub:  `https://github.com/yourusername`
- LinkedIn: `your-linkedin-url`
- Email: `your-email@gmail.com`

### Update Projects

Replace project cards (Lines 155-235 in index.html):

```html
<div class="project-card featured">
    <div class="project-badge live">Live Project</div>
    <div class="project-image">
        <img src="images/your-project. jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span>Tech1</span>
            <span>Tech2</span>
        </div>
        <div class="project-links">
            <a href="live-url">Live Demo</a>
            <a href="github-url">Code</a>
        </div>
    </div>
</div>
```

### Update Skills

Modify skill cards (Lines 118-159 in index.html):

```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-react"></i> <!-- Change icon -->
    </div>
    <h3>React</h3> <!-- Change skill name -->
    <div class="skill-bar">
        <div class="skill-progress" data-progress="80"></div>
    </div>
    <span class="skill-percentage">80%</span>
</div>
```

### Change Color Scheme

Update CSS variables (Lines 2-12 in styles.css):

```css
:root {
    --primary-color: #667eea;     /* Main purple-blue */
    --secondary-color: #764ba2;   /* Deep purple */
    --accent-color: #f093fb;      /* Pink accent */
    --dark-bg: #0f0c29;           /* Dark background */
    --darker-bg: #0a0818;         /* Darker sections */
    /* Change these to your preferred colors */
}
```

### Add Your Profile Photo

Replace the icon placeholder (Line 91 in index.html):

```html
<div class="image-placeholder">
    <img src="images/profile.jpg" alt="Your Name - Web Developer">
</div>
```

The CSS is already configured to display images properly. 

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main HTML structure
│   ├── Navigation
│   ├── Hero Section
│   ├── About Section
│   ├── Skills Section
│   ├── Projects Section
│   ├── Contact Section
│   └── Footer
│
├── styles.css              # Complete styling
│   ├── CSS Variables
│   ├── Reset & Base Styles
│   ├── Navigation Styles
│   ├── Hero Styles
│   ├── Section Styles
│   ├── Animations
│   └── Responsive Media Queries
│
├── script. js               # JavaScript functionality
│   ├── Navbar scroll effects
│   ├── Mobile menu toggle
│   ├── Smooth scrolling
│   ├── Typing animation
│   ├── Scroll animations
│   ├── Counter animations
│   ├── Skill bar animations
│   ├── Form validation
│   └── Observer APIs
│
├── images/                 # Project images
│   ├── profile.jpg
│   ├── ictrl.png
│   ├── crafts-cafe-screenshot.jpg
│   ├── teacubs-screenshot.jpg
│   └── portfolio-screenshot.jpg
│
└── README.md              # Documentation
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Create a Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Save and wait for deployment
   - Your site will be live at:  `https://yourusername.github.io/portfolio`

### Netlify

1. **Drag & Drop**
   - Visit [Netlify Drop](https://app.netlify.com/drop)
   - Drag your project folder
   - Instant deployment! 

2. **Connect to GitHub**
   - Click "New site from Git"
   - Connect your GitHub repository
   - Automatic deployment on every push

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

## 🌍 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| Opera   | ✅ Latest |

**Note:** Requires modern browser with ES6+ and CSS Grid support

## ⚡ Performance Tips

1. **Optimize Images**
   - Compress images using TinyPNG or ImageOptim
   - Use WebP format for better compression
   - Recommended max width: 1200px

2. **Minify Files (Production)**
   - Minify CSS:  Use cssnano or clean-css
   - Minify JavaScript: Use Terser or UglifyJS
   - Consider build tools like Parcel or Vite

3. **Loading Optimization**
   - Images are already set up for lazy loading
   - Font Awesome loads from CDN
   - Google Fonts optimized with display=swap

## 📧 Contact Form Setup

The current form has frontend validation. To make it functional: 

### Option 1: Formspree (Easy & Free)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form tag in `index.html`:
```html
<form class="contact-form" id="contactForm" 
      action="https://formspree.io/f/YOUR_FORM_ID" 
      method="POST">
```

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add EmailJS library before `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email. min.js"></script>
```
3. Update the form submission handler in `script.js` with EmailJS code

### Option 3: Backend API

Create your own backend with Node.js, PHP, or Python to handle form submissions.

## 🎯 Features to Add (Future Enhancements)

- [ ] Blog section
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Project filtering by technology
- [ ] Testimonials section
- [ ] Resume download button
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Accessibility improvements (WCAG 2.1)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

You are free to:
- Use for personal projects
- Use for commercial projects
- Modify and customize
- Distribute

**Attribution appreciated but not required!** ⭐

## 👨‍💻 About the Developer

**Nathaniel Arquiza**
- Junior Web Developer
- Skills: HTML, CSS, JavaScript, Flutter
- Location: Guimba Nueva Ecija, Philippines
- Email: nathanielcarquiza@gmail.com

### Connect With Me

- 💼 [LinkedIn](https://www.linkedin.com/in/nathaniel-arquiza-ba29653a0/)
- 🐙 [GitHub](https://github.com/Natszie)
- 📧 [Email](mailto:nathanielcarquiza@gmail.com)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs
- The web development community

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Web. dev](https://web.dev/)

## 🐛 Known Issues

Currently no known issues. If you find any bugs, please report them! 

## 💬 FAQ

**Q: Can I use this template for my own portfolio?**  
A: Yes! It's completely free to use and customize. 

**Q: Do I need to credit you?**  
A: Not required, but appreciated! 

**Q: The contact form isn't sending emails? **  
A: You need to connect it to a backend service (see Contact Form Setup section).

**Q: How do I change the colors?**  
A:  Modify the CSS variables in the `:root` section of styles.css.

**Q: Is this SEO-friendly?**  
A: Basic SEO is included.  Consider adding meta tags, Open Graph tags, and structured data for better SEO.

---

**Made with ❤️ by Nathaniel Arquiza**

If you found this helpful, please consider giving it a ⭐ on GitHub! 


Last Updated: January 2026

