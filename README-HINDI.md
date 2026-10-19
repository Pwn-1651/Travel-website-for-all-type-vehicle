# Shree Jagdamba Travels — Final responsive static website

## Start
Extract ZIP and open `index.html` with VS Code Live Server. This is a standalone HTML/CSS/JS frontend; it is **not** a Laravel application.

## File guide (section comments included)
- `index.html` — topbar, navigation, five hero slides, fleet, destinations, all-India, about, reviews, gallery, video, services, enquiry, footer.
- `assets/style.css` — original base design.
- `assets/hero-overrides.css` — final responsive overrides, grouped by numbered sections. Edit this file for responsive changes.
- `assets/app.js` — slideshow, car animation, mobile navigation, reveals, form demo.
- `assets/s1.png` to `s5.png` — 1672x941 landscape slides for desktop/tablet.
- `assets/m1.png` to `m5.png` — 4:5 portrait slides for phones (actual provided images, not missing .webp files).

## Slider logic
- `picture > source media=(max-width:700px)` automatically loads mobile `m*.png`; desktop loads `s*.png`.
- `object-fit:contain` shows the whole image without cropping. On screens with different ratios, empty bands may appear: this is mathematically unavoidable without cropping or stretching.
- Desktop max-height is the viewport minus header, mobile has 4:5 ratio and max-height for small screens.
- Test 300, 320, 360, 375, 390, 414, 600, 768, 1024, 1366, 1920px.

## Before going live
- Phone, email, social media URLs have not been supplied; placeholders remain, do not treat them as real links.
- Enquiry form is frontend-only and **does not send/store leads**. Connect Laravel/MySQL or backend API before launch.
- YouTube video is a placeholder. Reviews are not fabricated.
- Illustrative Unsplash photos require internet and should be replaced with your own/licensed fleet photographs.
- Some supplied promotional temple artwork is illustrative, not documentary photography.
