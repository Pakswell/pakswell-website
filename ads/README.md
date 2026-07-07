# PAKSWELL Google Ads Landing Pages

This folder contains product-specific and market-specific Google Ads landing pages:

- `epal-euro-pallets.html`
- `pallet-collars.html`
- `us-pallet-collars.html`
- `pallet-collar-hinges.html`
- `japan.html`
- `korea.html`
- `vietnam.html`
- `taiwan.html`
- `malaysia.html`
- `thailand.html`
- `philippines.html`

Shared files:

- `ads.css`
- `ads.js`
- `market-pages.js`
- `index.html` noindex redirect, so `/ads/` does not expose an internal landing page list

## Deployment

Upload the full `ads/` folder to the website root so the pages resolve as:

- `https://www.pakswell.com/ads/epal-euro-pallets.html`
- `https://www.pakswell.com/ads/pallet-collars.html`
- `https://www.pakswell.com/ads/us-pallet-collars.html`
- `https://www.pakswell.com/ads/pallet-collar-hinges.html`
- `https://www.pakswell.com/ads/japan.html`
- `https://www.pakswell.com/ads/korea.html`
- `https://www.pakswell.com/ads/vietnam.html`
- `https://www.pakswell.com/ads/taiwan.html`
- `https://www.pakswell.com/ads/malaysia.html`
- `https://www.pakswell.com/ads/thailand.html`
- `https://www.pakswell.com/ads/philippines.html`

The pages include optimized local image assets in `ads/assets/`, copied from the PAKSWELL work folder so deployment does not depend on iCloud paths.

## Google Ads Notes

Each page already includes the current Google Ads tag:

- `AW-18091479514`

The shared script tracks button and form events with `gtag("event", ...)`. WhatsApp clicks also fire the current Google Ads conversion label:

- `AW-18091479514/YtFFCPfIq6scENqj2LJD`

Form submissions store enhanced conversion user data in session storage before redirecting to `/thank-you`, where the existing lead-form conversion label fires:

- `AW-18091479514/5nFFCKKxnZwcENqj2LJD`

Phone and email clicks currently fire the same lead conversion label until separate Google Ads conversion actions are created:

- `AW-18091479514/5nFFCKKxnZwcENqj2LJD`

## Forms

The lead forms post to the same public Web3Forms endpoint used by the current website and redirect to:

- `https://www.pakswell.com/thank-you`

Before production launch, send one test inquiry from each page and confirm the email subject clearly identifies the product.
