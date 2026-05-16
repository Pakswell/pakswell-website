# PAKSWELL Google Ads Landing Pages

This folder contains three static product-specific landing pages:

- `epal-euro-pallets.html`
- `pallet-collars.html`
- `pallet-collar-hinges.html`

Shared files:

- `ads.css`
- `ads.js`
- `index.html` preview hub

## Deployment

Upload the full `ads/` folder to the website root so the pages resolve as:

- `https://www.pakswell.com/ads/epal-euro-pallets.html`
- `https://www.pakswell.com/ads/pallet-collars.html`
- `https://www.pakswell.com/ads/pallet-collar-hinges.html`

The pages include optimized local image assets in `ads/assets/`, copied from the PAKSWELL work folder so deployment does not depend on iCloud paths.

## Google Ads Notes

Each page already includes the current Google Ads tag:

- `AW-18091479514`

The shared script tracks button and form events with `gtag("event", ...)`. WhatsApp clicks also fire the current Google Ads conversion label:

- `AW-18091479514/YtFFCPfIq6scENqj2LJD`

Form submissions redirect to `/thank-you.html`, where the existing lead-form conversion label fires:

- `AW-18091479514/5nFFCKKxnZwcENqj2LJD`

## Forms

The lead forms post to the same public Web3Forms endpoint used by the current website and redirect to:

- `https://www.pakswell.com/thank-you.html`

Before production launch, send one test inquiry from each page and confirm the email subject clearly identifies the product.
