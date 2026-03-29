
    
    // boton de scroll
    const scrollBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ── Intersection Observer: reveal sections ──
    const sections = document.querySelectorAll('section:not(#hero)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(s => observer.observe(s));

    // ── Contact form feedback ──
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const msg = document.getElementById('form-msg');
      msg.style.display = 'block';
      this.reset();
      setTimeout(() => { msg.style.display = 'none'; }, 5000);
    });