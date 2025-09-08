// Logo overlay fade effect
document.addEventListener('DOMContentLoaded', function() {
   const logoOverlay = document.getElementById('logo-overlay');
  
   // Hide logo overlay after 3 seconds
   setTimeout(() => {
       logoOverlay.classList.add('fade-out');
   }, 3000);
  
   // Remove overlay from DOM after animation completes
   setTimeout(() => {
       logoOverlay.style.display = 'none';
   }, 3800);
});


// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');


navToggle.addEventListener('click', () => {
   navMenu.classList.toggle('active');
  
   // Animate hamburger menu
   const spans = navToggle.querySelectorAll('span');
   spans.forEach(span => span.classList.toggle('active'));
});


// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
   link.addEventListener('click', () => {
       navMenu.classList.remove('active');
   });
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
       e.preventDefault();
       const target = document.querySelector(this.getAttribute('href'));
       if (target) {
           target.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
           });
       }
   });
});


// Navbar background change on scroll
window.addEventListener('scroll', () => {
   const navbar = document.querySelector('.navbar');
   if (window.scrollY > 100) {
       navbar.style.background = 'rgba(0, 0, 0, 0.95)';
   } else {
       navbar.style.background = 'rgba(0, 0, 0, 0.9)';
   }
});


// Intersection Observer for animations
const observerOptions = {
   threshold: 0.1,
   rootMargin: '0px 0px -50px 0px'
};


const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
           entry.target.style.opacity = '1';
           entry.target.style.transform = 'translateY(0)';
       }
   });
}, observerOptions);


// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
   const animatedElements = document.querySelectorAll('.platform-card, .robux-card, .youtube-card, .stat-card');
  
   animatedElements.forEach(el => {
       el.style.opacity = '0';
       el.style.transform = 'translateY(30px)';
       el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
       observer.observe(el);
   });
});


// Parallax effect for floating bubbles
window.addEventListener('scroll', () => {
   const bubbles = document.querySelectorAll('.bubble');
   const scrolled = window.pageYOffset;
  
   bubbles.forEach((bubble, index) => {
       const speed = 0.5 + (index * 0.1);
       bubble.style.transform = `translateY(${scrolled * speed}px)`;
   });
});


// Add texture effect to bubbles (purple bleeding into white/black)
function addTextureEffect() {
   const bubbles = document.querySelectorAll('.bubble');
  
   bubbles.forEach(bubble => {
       // Create a canvas for texture
       const canvas = document.createElement('canvas');
       const ctx = canvas.getContext('2d');
       canvas.width = 200;
       canvas.height = 200;
      
       // Create gradient with texture
       const gradient = ctx.createRadialGradient(100, 100, 0, 100, 100, 100);
       gradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
       gradient.addColorStop(0.3, 'rgba(168, 85, 247, 0.6)');
       gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.3)');
       gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      
       ctx.fillStyle = gradient;
       ctx.fillRect(0, 0, 200, 200);
      
       // Add noise texture
       for (let i = 0; i < 1000; i++) {
           const x = Math.random() * 200;
           const y = Math.random() * 200;
           const alpha = Math.random() * 0.1;
           ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
           ctx.fillRect(x, y, 1, 1);
       }
      
       // Apply as background
       bubble.style.background = `url(${canvas.toDataURL()})`;
   });
}


// Initialize texture effect after page load
window.addEventListener('load', addTextureEffect);


// CTA button click handler
document.querySelectorAll('.cta-button, .robux-button').forEach(button => {
   button.addEventListener('click', (e) => {
       e.preventDefault();
      
       // Add click animation
       button.style.transform = 'scale(0.95)';
       setTimeout(() => {
           button.style.transform = '';
       }, 150);
      
       // Show Robux purchase modal or redirect
       alert('Robux gift card purchase coming soon! This would typically redirect to a secure payment page.');
   });
});


// YouTube card click handlers
document.querySelectorAll('.youtube-card').forEach(card => {
   card.addEventListener('click', () => {
       // Add click animation
       card.style.transform = 'scale(0.98)';
       setTimeout(() => {
           card.style.transform = '';
       }, 150);
      
       // Redirect to YouTube channel
       window.open('https://www.youtube.com/@WessyTrades', '_blank');
   });
});


// Discord button click handler
document.querySelector('.discord-button').addEventListener('click', (e) => {
   e.preventDefault();
  
   // Add click animation
   e.target.style.transform = 'scale(0.95)';
   setTimeout(() => {
       e.target.style.transform = '';
   }, 150);
  
   // Show Discord invite modal or redirect
   alert('Discord invite link coming soon! This would typically open a Discord invite or redirect to the server.');
});


// Add hover effect to client logos
document.querySelectorAll('.client-logo').forEach(logo => {
   logo.addEventListener('mouseenter', () => {
       logo.style.transform = 'scale(1.1) rotate(5deg)';
   });
  
   logo.addEventListener('mouseleave', () => {
       logo.style.transform = 'scale(1) rotate(0deg)';
   });
});


// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
   let i = 0;
   element.innerHTML = '';
  
   function type() {
       if (i < text.length) {
           element.innerHTML += text.charAt(i);
           i++;
           setTimeout(type, speed);
       }
   }
  
   type();
}


// Initialize typing effect after logo overlay fades
setTimeout(() => {
   const heroTitle = document.querySelector('.hero-title .gradient-text');
   if (heroTitle) {
       typeWriter(heroTitle, 'NEVER', 150);
   }
}, 3500);


// Add scroll progress indicator
function createScrollProgress() {
   const progressBar = document.createElement('div');
   progressBar.style.cssText = `
       position: fixed;
       top: 0;
       left: 0;
       width: 0%;
       height: 3px;
       background: linear-gradient(90deg, #8b5cf6, #a855f7);
       z-index: 1001;
       transition: width 0.1s ease;
   `;
   document.body.appendChild(progressBar);
  
   window.addEventListener('scroll', () => {
       const scrollTop = window.pageYOffset;
       const docHeight = document.body.offsetHeight - window.innerHeight;
       const scrollPercent = (scrollTop / docHeight) * 100;
       progressBar.style.width = scrollPercent + '%';
   });
}


// Initialize scroll progress
createScrollProgress();


// Add particle effect to hero section
function createParticles() {
   const hero = document.querySelector('.hero');
   const particleCount = 50;
  
   for (let i = 0; i < particleCount; i++) {
       const particle = document.createElement('div');
       particle.style.cssText = `
           position: absolute;
           width: 2px;
           height: 2px;
           background: rgba(139, 92, 246, 0.6);
           border-radius: 50%;
           pointer-events: none;
           animation: particleFloat ${3 + Math.random() * 4}s linear infinite;
           left: ${Math.random() * 100}%;
           top: ${Math.random() * 100}%;
       `;
       hero.appendChild(particle);
   }
}


// Add particle animation CSS
const style = document.createElement('style');
style.textContent = `
   @keyframes particleFloat {
       0% {
           transform: translateY(100vh) rotate(0deg);
           opacity: 0;
       }
       10% {
           opacity: 1;
       }
       90% {
           opacity: 1;
       }
       100% {
           transform: translateY(-100px) rotate(360deg);
           opacity: 0;
       }
   }
`;
document.head.appendChild(style);


// Initialize particles
setTimeout(createParticles, 4000);


// Add glitch effect to TC logo
function addGlitchEffect() {
   const tcLogos = document.querySelectorAll('.tc-logo, .tc-logo-small');
  
   tcLogos.forEach(logo => {
       logo.addEventListener('mouseenter', () => {
           logo.style.textShadow = `
               2px 0 #ff0000,
               -2px 0 #00ff00,
               0 2px #0000ff
           `;
           logo.style.animation = 'glitch 0.3s infinite';
       });
      
       logo.addEventListener('mouseleave', () => {
           logo.style.textShadow = '';
           logo.style.animation = '';
       });
   });
}


// Add glitch animation CSS
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
   @keyframes glitch {
       0% { transform: translate(0); }
       20% { transform: translate(-2px, 2px); }
       40% { transform: translate(-2px, -2px); }
       60% { transform: translate(2px, 2px); }
       80% { transform: translate(2px, -2px); }
       100% { transform: translate(0); }
   }
`;
document.head.appendChild(glitchStyle);


// Initialize glitch effect
setTimeout(addGlitchEffect, 5000);


// Performance optimization: Throttle scroll events
function throttle(func, limit) {
   let inThrottle;
   return function() {
       const args = arguments;
       const context = this;
       if (!inThrottle) {
           func.apply(context, args);
           inThrottle = true;
           setTimeout(() => inThrottle = false, limit);
       }
   }
}


// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
   // Scroll-based animations
}, 16)); // ~60fps



