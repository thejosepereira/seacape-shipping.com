// Mobile nav
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity  = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

// Navbar scroll shadow
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Staggered children reveal
document.querySelectorAll('.reveal-group').forEach(group => {
  Array.from(group.children).forEach((child, i) => {
    child.classList.add('reveal');
    child.style.transitionDelay = `${i * 80}ms`;
    revealObserver.observe(child);
  });
});

// Tools page: alphabetical tab filter
const tabBtns = document.querySelectorAll('.alpha-tab');
const glossaryItems = document.querySelectorAll('.glossary-item');
const glossarySearch = document.getElementById('glossarySearch');

if (tabBtns.length) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const letter = btn.dataset.letter;
      glossaryItems.forEach(item => {
        item.style.display = (letter === 'ALL' || item.dataset.letter === letter) ? '' : 'none';
      });
      if (glossarySearch) glossarySearch.value = '';
    });
  });
}

if (glossarySearch) {
  glossarySearch.addEventListener('input', () => {
    const q = glossarySearch.value.trim().toLowerCase();
    tabBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-letter="ALL"]')?.classList.add('active');

    if (!q) {
      // Reset: show all groups and rows
      glossaryItems.forEach(item => {
        item.style.display = '';
        item.querySelectorAll('tr').forEach(row => row.style.display = '');
      });
      return;
    }

    glossaryItems.forEach(item => {
      let groupVisible = false;
      item.querySelectorAll('tr').forEach(row => {
        // Search only the term (first <td>)
        const termCell = row.querySelector('td:first-child');
        const matches = termCell && termCell.textContent.toLowerCase().includes(q);
        row.style.display = matches ? '' : 'none';
        if (matches) groupVisible = true;
      });
      item.style.display = groupVisible ? '' : 'none';
    });
  });
}

// Contact form — submits to Formspree and forwards to chile@seacape-shipping.com
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID';
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const successMsg = document.getElementById('formSuccess');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        contactForm.style.display = 'none';
        if (successMsg) successMsg.style.display = 'block';
      } else {
        throw new Error('submit failed');
      }
    } catch {
      btn.textContent = 'Error — please try again';
      btn.disabled = false;
    }
  });
}
