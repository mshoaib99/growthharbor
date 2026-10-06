const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Content-Security-Policy": "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; upgrade-insecure-requests"
};

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) headers.set(key, value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request, env) {
    if (!['GET', 'HEAD'].includes(request.method)) {
      return new Response('Method Not Allowed', { status: 405, headers: { ...SECURITY_HEADERS, 'Allow': 'GET, HEAD' } });
    }
    const response = await env.ASSETS.fetch(request);
    const secured = withSecurityHeaders(response);
    if (request.method === 'GET' && secured.ok) {
      const headers = new Headers(secured.headers);
      const path = new URL(request.url).pathname;
      if (path.match(/\.[a-z0-9]+$/i)) headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
      else headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
      return new Response(secured.body, { status: secured.status, headers });
    }
    return secured;
  }
};
