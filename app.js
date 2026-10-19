(() => {
    'use strict'; const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)]; const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches; $('#year').textContent = new Date().getFullYear(); const menu = $('#menuToggle'), nav = $('#navLinks'); menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu') }); $$('.nav-links a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false') }));
    // Hero controls follow the number of available slides.
    const slides = $$('.hero-slide'), dots = $$('.hero-dots button'), counter = $('#heroCounter'), slideCount = slides.length; let index = 0, slideTimer; function showSlide(next) { index = (next + slideCount) % slideCount; slides.forEach((s, i) => s.classList.toggle('active', i === index)); dots.forEach((d, i) => { d.classList.toggle('active', i === index); d.setAttribute('aria-pressed', String(i === index)) }); counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slideCount).padStart(2, '0')}` } function restart() { clearInterval(slideTimer); if (!reduced && !document.hidden) slideTimer = setInterval(() => showSlide(index + 1), 5700) } $('.hero-prev').addEventListener('click', () => { showSlide(index - 1); restart() }); $('.hero-next').addEventListener('click', () => { showSlide(index + 1); restart() }); dots.forEach((d, i) => d.addEventListener('click', () => { showSlide(i); restart() })); document.addEventListener('visibilitychange', restart); restart();
    $$('.vehicle-image').forEach(button => button.addEventListener('click', () => {
        const zoomed = button.closest('.fleet-card').classList.toggle('is-zoomed');
        button.setAttribute('aria-pressed', String(zoomed));
        button.setAttribute('aria-label', `${zoomed ? 'Restore' : 'Zoom'} ${button.querySelector('img').alt.toLowerCase()}`);
    }));
    // The saved car image sweeps across the contact bar and bumps individual letters.
    const top = $('#topbar'), car = $('#topCar'), contacts = $$('#topContacts .top-contact'), carImage = car.querySelector('img');
    contacts.forEach(contact => {
        const text = [...contact.childNodes]
            .filter(node => node.nodeType === Node.TEXT_NODE)
            .map(node => node.textContent)
            .join('')
            .trim();
        if (!text) return;
        contact.setAttribute('aria-label', text);
        [...contact.childNodes]
            .filter(node => node.nodeType === Node.TEXT_NODE)
            .forEach(node => node.remove());
        const textElement = document.createElement('span');
        textElement.className = 'top-contact-text';
        textElement.setAttribute('aria-hidden', 'true');
        [...text].forEach((character, i) => {
            const letter = document.createElement('span');
            letter.className = 'impact-letter';
            letter.textContent = character;
            const tilt = ((i % 5) - 2) * 7;
            letter.style.setProperty('--letter-tilt', `${tilt}deg`);
            letter.style.setProperty('--letter-return-tilt', `${-tilt}deg`);
            textElement.append(letter);
        });
        contact.append(textElement);
        textElement.addEventListener('animationend', event => {
            if (event.target instanceof HTMLElement) event.target.classList.remove('is-airborne');
        });
    });
    let last = 0, progress = 0;
    function carFrame(t) {
        if (!last) last = t;
        const dt = Math.min(70, t - last);
        last = t;
        const width = top.clientWidth, carW = car.clientWidth;
        progress = (progress + dt * .13) % (width + carW + 80);
        const x = width + 20 - progress;
        car.style.transform = `translateX(${x}px)`;
        const bounds = car.getBoundingClientRect();
        contacts.forEach(contact => contact.querySelectorAll('.impact-letter').forEach(letter => {
            const rect = letter.getBoundingClientRect();
            const hit = bounds.right > rect.left && bounds.left < rect.right
                && bounds.bottom > rect.top && bounds.top < rect.bottom;
            if (hit && !letter.classList.contains('is-airborne')) letter.classList.add('is-airborne');
        }));
        requestAnimationFrame(carFrame);
    }
    if (!reduced) {
        if (carImage.complete && carImage.naturalWidth > 0) requestAnimationFrame(carFrame);
        else carImage.addEventListener('load', () => requestAnimationFrame(carFrame), { once: true });
    }
    // Reveal as sections enter view.
    const reveals = $$('.reveal'); if ('IntersectionObserver' in window && !reduced) { const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }), { threshold: .12 }); reveals.forEach(el => obs.observe(el)) } else reveals.forEach(el => el.classList.add('visible'));
    const toast = $('#toast'); let toastTimeout; function notify(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => toast.classList.remove('show'), 4000) } $('#videoButton').addEventListener('click', () => notify('YouTube video is not linked yet. Add your official video URL to activate playback.'));
    $('#inquiryForm').addEventListener('submit', e => { e.preventDefault(); if (!e.target.reportValidity()) return; const data = new FormData(e.target), text = `Shree Jagdamba Travels enquiry\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nPickup: ${data.get('pickup')}\nDestination: ${data.get('destination')}\nDate: ${data.get('date')}\nVehicle: ${data.get('vehicle')}`; const msg = $('#formMessage'); msg.textContent = 'Demo only: your enquiry was not submitted. Use “Copy Enquiry” below to save your details.'; let copy = $('#copyEnquiry'); if (!copy) { copy = document.createElement('button'); copy.id = 'copyEnquiry'; copy.type = 'button'; copy.className = 'btn btn-gold'; copy.style.marginTop = '12px'; msg.after(copy) } copy.textContent = 'Copy Enquiry'; copy.onclick = async () => { try { await navigator.clipboard.writeText(text); notify('Enquiry details copied.') } catch { notify('Clipboard access unavailable. Use a local server or copy details manually.') } } });
})();
