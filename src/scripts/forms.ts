/**
 * Placeholder form handler. The approved design has no backend (open item).
 * - If PUBLIC_FORM_ENDPOINT is set, JSON is POSTed there.
 * - Otherwise nothing is sent and the user is told the form is not connected,
 *   so no one believes a lead was captured when it was not.
 * Replace with the real provider (Formspree, HubSpot, Resend, etc.).
 */
export async function submitForm(kind: string, data: Record<string, unknown>): Promise<{ ok: boolean; connected: boolean }> {
  const endpoint = document.documentElement.dataset.formEndpoint;
  if (!endpoint) {
    console.warn(`[forms] "${kind}" not sent: PUBLIC_FORM_ENDPOINT is not configured.`, data);
    return { ok: false, connected: false };
  }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kind, ...data }),
    });
    return { ok: res.ok, connected: true };
  } catch {
    return { ok: false, connected: true };
  }
}
