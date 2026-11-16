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
- `index.html` a homepage variant whose canonical URL is the homepage

## Deployment

Cloudflare Pages serves these source files at extensionless URLs:

- `https://www.pakswell.com/ads/epal-euro-pallets`
- `https://www.pakswell.com/ads/pallet-collars`
- `https://www.pakswell.com/ads/us-pallet-collars`
- `https://www.pakswell.com/ads/pallet-collar-hinges`
- `https://www.pakswell.com/ads/japan`
- `https://www.pakswell.com/ads/korea`
- `https://www.pakswell.com/ads/vietnam`
- `https://www.pakswell.com/ads/taiwan`
- `https://www.pakswell.com/ads/malaysia`
- `https://www.pakswell.com/ads/thailand`
- `https://www.pakswell.com/ads/philippines`

The pages include optimized local image assets in `ads/assets/`, copied from the PAKSWELL work folder so deployment does not depend on iCloud paths.

## Google Ads Notes

Each page already includes the current Google Ads tag:

- `AW-18091479514`

The published pages load the main site's `site.js` and `production.js`.
An accepted quote submission on `/contact` triggers the existing primary
lead conversion. The click on Request a quote, the mobile Email sales click,
and successful email copying each have a separate secondary conversion action.
WhatsApp is also secondary. Do not reuse the form label for these interactions.

Before production launch, send one test inquiry from each page and confirm the email subject clearly identifies the product.
