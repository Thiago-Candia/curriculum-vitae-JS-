
    // scroll to top
    const scrollBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // reveal de secciones 
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


    // Form de contacto
    const form = document.getElementById('contact-form');

      const msg = document.getElementById('form-msg');

      form.addEventListener('submit', function(e) {
      e.preventDefault(); 

      msg.style.display = "block";
      msg.textContent = "Enviando...";

      emailjs.sendForm(
        'service_9fnrppt', 
        'template_2z3pp7o', 
        this
      )
    .then(() => {
      msg.style.display = "block";
      msg.textContent = "✓ Mensaje enviado correctamente";
      form.reset();
      setTimeout(() => { msg.style.display = 'none'; }, 5000);
    })
    .catch((error) => {
      msg.style.display = "block";
      msg.textContent = "❌ Error al enviar el mensaje";
      console.error(error);
      setTimeout(() => { msg.style.display = 'none'; }, 5000);
    });
  });