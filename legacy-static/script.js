/* ==========================================================================
   DEVELOPER PORTFOLIO - INTERACTIVE SCRIPTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // --- 1. Cursor Glow Tracking ---
  const mouseGlow = document.getElementById('mouseGlow');
  
  if (mouseGlow) {
    window.addEventListener('mousemove', (e) => {
      // Direct positioning for high performance
      mouseGlow.style.left = `${e.clientX}px`;
      mouseGlow.style.top = `${e.clientY}px`;
    });
  }

  // --- 2. Floating Navbar Scroll State ---
  const header = document.querySelector('.main-header');
  
  const handleHeaderScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleHeaderScroll);
  // Initial check on load
  handleHeaderScroll();

  // --- 3. Scroll Animations (Intersection Observer) ---
  const animationTargets = document.querySelectorAll('.trigger-fade');
  
  if (animationTargets.length > 0) {
    const observerOptions = {
      root: null, // Viewport
      rootMargin: '0px 0px -10% 0px', // Trigger slightly before fully visible
      threshold: 0.1
    };
    
    const animationObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once animated, stop tracking it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    animationTargets.forEach(target => {
      animationObserver.observe(target);
    });
  }

  // --- 4. Horizontal Scroll physics on Project Grid (Drag-to-Scroll) ---
  const scrollContainer = document.getElementById('workScrollContainer');
  
  if (scrollContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    scrollContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      scrollContainer.classList.add('active');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });
    
    scrollContainer.addEventListener('mouseleave', () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    });
    
    scrollContainer.addEventListener('mouseup', () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    });
    
    scrollContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2.5; // Scroll speed scaling factor
      scrollContainer.scrollLeft = scrollLeft - walk;
    });

    // Option: Convert mouse vertical scroll wheel into horizontal scroll when hovering
    scrollContainer.addEventListener('wheel', (e) => {
      // Only capture scroll wheel horizontal override on larger displays
      if (window.innerWidth > 768) {
        if (e.deltaY !== 0) {
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY * 1.5;
        }
      }
    }, { passive: false });
  }

  // --- 5. Secure Form Handler & Validation ---
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const messageInput = document.getElementById('userMessage');
      
      if (!nameInput || !emailInput || !messageInput) return;
      
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
      
      // Basic secure validation checks
      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill out all required fields.';
        formStatus.className = 'form-status error';
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.textContent = 'Please provide a valid email address.';
        formStatus.className = 'form-status error';
        return;
      }
      
      // Update UI securely using textContent (Strictly no innerHTML)
      formStatus.textContent = 'Sending message...';
      formStatus.className = 'form-status';
      
      // Simulate secure API/Form submission
      setTimeout(() => {
        formStatus.textContent = 'Thank you, your message was sent successfully!';
        formStatus.className = 'form-status success';
        
        // Reset form inputs safely
        contactForm.reset();
      }, 1200);
    });
  }

  // --- 6. Scroll Anchor Offsets ---
  const navLinks = document.querySelectorAll('.nav-link, .logo');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        
        if (targetId === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = header.offsetHeight || 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // --- 7. Hero Section Typewriter Effect ---
  const typewriterText = document.getElementById('typewriterText');
  if (typewriterText) {
    const roles = ["AI Architectures", "Full-Stack Systems", "Creative UI/UX", "Secure Cloud Code"];
    let currentRoleIdx = 0;
    let currentCharIdx = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[currentRoleIdx];
      
      if (isDeleting) {
        currentCharIdx--;
        typingSpeed = 50; // faster delete
      } else {
        currentCharIdx++;
        typingSpeed = 120; // natural typing speed
      }
      
      // Update text securely via textContent to block XSS
      typewriterText.textContent = currentRole.substring(0, currentCharIdx);
      
      if (!isDeleting && currentCharIdx === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at the end of word
      } else if (isDeleting && currentCharIdx === 0) {
        isDeleting = false;
        currentRoleIdx = (currentRoleIdx + 1) % roles.length;
        typingSpeed = 500; // Pause before starting new word
      }
      
      setTimeout(type, typingSpeed);
    };
    
    // Start typewriter sequence
    setTimeout(type, 1000);
  }

  // --- 8. Interactive Stardust Particle Canvas Backing ---
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
    
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedY = Math.random() * 0.4 + 0.15;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.alpha = Math.random() * 0.45 + 0.15;
      }
      update(mouseX, mouseY) {
        this.y -= this.speedY;
        this.x += this.speedX;
        
        // Repulsion physics from user's mouse glow spot
        if (mouseX !== null && mouseY !== null) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const force = (130 - dist) / 130;
            // Push away proportional to distance
            this.x += (dx / dist) * force * 2.2;
            this.y += (dy / dist) * force * 2.2;
          }
        }
        
        // Wrap around limits
        if (this.y < 0 || this.x < 0 || this.x > width) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(168, 85, 247, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Instantiate 45 floating stars dispersed randomly
    for (let i = 0; i < 45; i++) {
      const p = new Particle();
      p.y = Math.random() * height; // initial dispersion
      particles.push(p);
    }
    
    let canvasMouseX = null;
    let canvasMouseY = null;
    
    window.addEventListener('mousemove', (e) => {
      canvasMouseX = e.clientX;
      canvasMouseY = e.clientY;
    });
    
    window.addEventListener('mouseleave', () => {
      canvasMouseX = null;
      canvasMouseY = null;
    });
    
    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update(canvasMouseX, canvasMouseY);
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  }

  // --- 9. GPU-Accelerated 3D Holographic Card Tilt & Shine ---
  const cards = document.querySelectorAll('.project-card');
  if (cards.length > 0) {
    cards.forEach(card => {
      const shine = card.querySelector('.card-shine');
      
      card.addEventListener('mousemove', (e) => {
        // Disable on touch screens/mobile viewports for better accessibility
        if (window.innerWidth < 768) return;
        
        const rect = card.getBoundingClientRect();
        // Mouse positions inside the card relative to top-left corner
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate offset from midpoints clamped (-0.5 to 0.5)
        const percentX = (x / rect.width) - 0.5;
        const percentY = (y / rect.height) - 0.5;
        
        // Set maximum tilt angles in degrees
        const maxRotation = 10;
        const rotateX = -percentY * maxRotation;
        const rotateY = percentX * maxRotation;
        
        // Apply GPU transform matrix securely
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        
        // Update shine background parameters to trace cursor glow
        if (shine) {
          card.style.setProperty('--shine-x', `${(x / rect.width) * 100}%`);
          card.style.setProperty('--shine-y', `${(y / rect.height) * 100}%`);
        }
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.setProperty('--shine-x', '50%');
        card.style.setProperty('--shine-y', '50%');
      });
    });
  }

  // --- 10. Physical Magnetic Hover Interactive pulling ---
  const magneticItems = document.querySelectorAll('.primary-btn, .secondary-btn, .social-icon, .logo, .resume-btn');
  if (magneticItems.length > 0) {
    magneticItems.forEach(item => {
      item.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return;
        
        const rect = item.getBoundingClientRect();
        // Calculate center coordinate
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Compute displacement vectors
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        
        // Pull strength scaling index
        const attractionIndex = 0.32;
        
        // Translate element
        item.style.transform = `translate(${dx * attractionIndex}px, ${dy * attractionIndex}px)`;
      });
      
      // Smoothly transition back once mouse leaves boundaries
      item.style.transition = 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)';
      
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // --- 11. 3D Coordinates Avatar Parallax ---
  const avatarWrapper = document.querySelector('.timeline-avatar-wrapper');
  if (avatarWrapper) {
    window.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 768) return;
      
      // Measure screen offset relative to center coordinates
      const offsetX = (window.innerWidth / 2 - e.clientX) / 32;
      const offsetY = (window.innerHeight / 2 - e.clientY) / 32;
      
      // Preserve alignment matrix and inject tilting values
      avatarWrapper.style.transform = `translate(-50%, -50%) rotateY(${offsetX}deg) rotateX(${offsetY}deg)`;
    });
    
    window.addEventListener('mouseleave', () => {
      avatarWrapper.style.transform = `translate(-50%, -50%) rotateY(0deg) rotateX(0deg)`;
    });
  }

  // --- 12. Viewport Scroll Indicator & Timeline Draw ---
  const scrollProgress = document.getElementById('scrollProgress');
  const timelineContainer = document.querySelector('.timeline-container');
  
  const handleViewportScrolls = () => {
    // Top Scroll Progress Bar calculation
    if (scrollProgress) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = `${scrollPercent}%`;
    }
    
    // Timeline drawing calculation
    if (timelineContainer) {
      const rect = timelineContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Draw progress starts when container top hits 80% viewport height
      const startPoint = windowHeight * 0.8;
      // Draw progress reaches 100% when container bottom reaches 20% viewport height
      const endPoint = windowHeight * 0.2;
      
      const totalHeight = rect.height;
      const currentPos = rect.top;
      
      let progress = 0;
      if (currentPos < startPoint) {
        const traversed = startPoint - currentPos;
        progress = (traversed / totalHeight) * 100;
      }
      
      const clampedProgress = Math.max(0, Math.min(100, progress));
      timelineContainer.style.setProperty('--scroll-height', `${clampedProgress}%`);
    }
  };
  
  window.addEventListener('scroll', handleViewportScrolls);
  window.addEventListener('resize', handleViewportScrolls);
  // Run on startup
  handleViewportScrolls();
});
