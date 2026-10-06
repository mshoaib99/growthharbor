# GrowthHarbor — Cloudflare Workers + Static Assets

This revision is a clean, original informational/content website inspired only by the general content structure the user provided. It does not copy SideHustle branding or text.

## Included
- Home page with professional informational positioning
- About page with original mission/values copy
- What We Cover page
- Blog index
- Long-form solar installation guide
- Solar cost guide
- Four large offer CTA buttons inside the solar installation article
- Privacy Policy and Terms written for this site's actual functionality
- Contact page with a clearly marked preview form
- Responsive mobile navigation
- Security headers in the Worker
- robots.txt and sitemap.xml

## Offer links
In `public/blog/solar-installation-guide/index.html`, replace:
- `https://YOUR-OFFER-LINK-1.example/`
- `https://YOUR-OFFER-LINK-2.example/`
- `https://YOUR-OFFER-LINK-3.example/`
- `https://YOUR-OFFER-LINK-4.example/`

Use your real offer URLs only after confirming the destination and applicable advertising/affiliate requirements. The buttons use `rel="nofollow sponsored"`.

## Domain placeholders
Replace `https://YOUR-DOMAIN.example/` in canonical tags, robots.txt and sitemap.xml with the real production domain.

## Deploy
1. `npm install`
2. `npx wrangler login`
3. `npm run dev`
4. `npm run deploy`

## Cloudflare security
Keep VPN/proxy/bot filtering at the Cloudflare layer rather than hard-coding IP databases into the site. Configure WAF/custom rules, bot protection and rate limiting in Cloudflare. Do not assume that every residential IP is human or every datacenter IP is malicious; use Cloudflare's current intelligence and your intended allow/block policy.

The website code itself does not generate artificial traffic, disguise bots as humans, or automate clicks.

## Production checklist
- Replace domain placeholders.
- Connect the contact form to a legitimate mail/form provider and add server-side validation + abuse protection.
- Review every third-party offer URL before publishing.
- Add any analytics/cookie consent mechanism only if analytics/cookies are actually enabled.
- Review legal pages for your business/entity and target jurisdictions with qualified legal counsel.
- Configure Cloudflare WAF, bot controls, rate limiting and DNS/HTTPS settings.
