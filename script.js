// Cookie Consent and Google Analytics
function loadGoogleAnalytics() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2D2CSH8VTH';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-2D2CSH8VTH', { 'anonymize_ip': true });
}

function initCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
        loadGoogleAnalytics();
        return; // already accepted
    } else if (consent === 'declined') {
        return; // already declined
    }

    // Create banner
    const banner = document.createElement('div');
    banner.className = 'cookie-banner block-border';
    banner.innerHTML = `
        <p>We use cookies to analyze traffic and improve our website via Google Analytics. For more details, see our <a href="#">Privacy Policy</a>.</p>
        <div class="cookie-actions">
            <button class="btn-decline block-border" id="btn-decline-cookies">Decline</button>
            <button class="btn-accept block-border" id="btn-accept-cookies">Accept</button>
        </div>
    `;
    document.body.appendChild(banner);

    // Show banner after a tiny delay for animation
    setTimeout(() => {
        banner.classList.add('show');
    }, 500);

    document.getElementById('btn-accept-cookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.classList.remove('show');
        loadGoogleAnalytics();
        setTimeout(() => banner.remove(), 400);
    });

    document.getElementById('btn-decline-cookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        banner.classList.remove('show');
        setTimeout(() => banner.remove(), 400);
    });
}

// Run consent check
initCookieConsent();
