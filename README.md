# Travel-website-for-all-type-vehicle
Shree Jagdamba Travels
A responsive, single-page travel and vehicle-rental website for Shree Jagdamba Travels, presenting car, tempo traveller, and bus rental services from Lucknow alongside spiritual tours and travel destinations across India.
Project status: Static frontend demo. The enquiry form does not send or store booking requests, and some contact and media links are placeholders.

Features
- Responsive navigation and mobile menu
- Five-slide hero carousel with separate desktop and mobile images
- Fleet and vehicle showcase with image zoom interactions
- Destination and tour-package sections
- All-India travel information, company overview, and services
- Gallery, reviews section, and video placeholder
- Enquiry form with client-side validation and a Copy Enquiry option
- Scroll-reveal effects and animated header details, with reduced-motion consideration
Technology Stack
- HTML5
- CSS3
- Vanilla JavaScript
No package manager, build tool, framework, or database is required to preview the frontend.
Project Structure
k/
├── index.html                 # Main website and page sections
├── README-HINDI.md            # Original project notes
└── assets/
    ├── style.css              # Base website styling
    ├── hero-overrides.css     # Responsive and final layout overrides
    ├── app.js                 # UI interactions and demo form logic
    ├── s1.png ... s5.png      # Desktop/tablet hero slides
    ├── m1.png ... m5.png      # Mobile hero slides
    └── ...                    # Fleet, banner, logo, and other images
Getting Started
1. Download and extract the ZIP archive.
2. Open the extracted k/ folder in Visual Studio Code.
3. Start Live Server from index.html (recommended).
4. Open the local URL provided by Live Server in your browser.
You can also open index.html directly in a browser, although a local development server is preferable for testing.
Customization
File	What to edit
index.html	Business copy, page sections, contact details, destinations, links, and image references
assets/style.css	Base typography, colors, and section styling
assets/hero-overrides.css	Responsive adjustments and layout overrides
assets/app.js	Carousel, navigation, animations, and enquiry form behavior
assets/ images	Hero slides, vehicle images, logo, and other visuals


Responsive hero images
The hero uses <picture> to serve portrait m1.png–m5.png slides on screens up to 700px, and landscape s1.png–s5.png slides on wider screens. Images use object-fit: contain to avoid cropping, so some screen sizes may show empty bands.

Recommended viewport checks: 300, 320, 360, 375, 390, 414, 600, 768, 1024, 1366, and 1920px.
Enquiry Form: Important
The enquiry form is frontend-only. On submission, it displays a demo message and offers a Copy Enquiry button. It does not email, save, or transmit the enquiry.

To accept real bookings, connect the form to a backend/API or an appropriate form service, implement server-side validation, and provide user-facing success and error states. Do not advertise the form as live until this is complete.
Before Deployment
- Replace placeholder phone numbers, email addresses, WhatsApp links, and social media links with verified business contact details.
- Replace the placeholder YouTube video with an official video URL.
- Review any testimonial/review content before publication; do not represent sample text as verified customer reviews.
- Replace illustrative or externally hosted Unsplash imagery with appropriate owned or licensed photos where needed. External images require internet access.
- Check image optimization, accessibility, mobile behavior, and all navigation links.
- Connect and test a real enquiry-handling system if bookings are required.
Deployment
Because this is a static website, it can be hosted on any static web host, including GitHub Pages, Netlify, Vercel, or conventional web hosting. Publish the contents of k/ as the site root, so index.html and the assets/ directory remain alongside each other.

No Laravel setup or database migration is required for this version.
Business Scope
The website presents Shree Jagdamba Travels' travel offerings, including vehicle rental, spiritual/family tours, and destinations such as Ayodhya, Varanasi, Kedarnath, Vindhyachal, Agra, Jaipur, Goa, and Delhi. Actual package availability, pricing, and booking arrangements must be confirmed by the business.
License
No software license was provided in the archive. Do not assume that the code or included images are open-source or free for redistribution without permission.
