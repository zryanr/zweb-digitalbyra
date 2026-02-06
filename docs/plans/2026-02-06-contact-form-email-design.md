# Contact Form Email Delivery Design

Date: 2026-02-06
Owner: Codex

## Goal
Make the website contact form send submissions to an inbox using SMTP, without exposing credentials to the browser.

## Non-Goals
- CRM integrations
- Advanced spam prevention
- Analytics/attribution

## Architecture
- Client form posts JSON to a Next.js API route at `app/api/contact/route.ts`.
- Server validates input, sends email via SMTP using `nodemailer`, and returns JSON `{ ok: true }` or `{ ok: false, error }`.
- SMTP configuration via environment variables only.

## Data Flow
1. User submits form.
2. Client `fetch` POSTs payload to `/api/contact`.
3. API validates required fields (`name`, `email`, `phone`), trims and bounds input.
4. API uses SMTP helper to deliver email to `CONTACT_TO`.
5. API responds with status; client shows success or error message.

## Validation
- Required: `name`, `email`, `phone`.
- Simple email sanity check.
- Trim and cap lengths (e.g., 200 chars for short fields, 1000 for message).

## Error Handling
- Validation failures return `400` with `{ ok: false, error }`.
- SMTP failures return `500` with generic message; server logs error tag only.
- Client shows inline error; form stays visible.

## Testing Plan
- Unit tests for the handler core:
  - Happy path calls `sendMail` and returns ok.
  - Missing required fields returns 400 without sending.
  - SMTP error returns 500.

## Configuration
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_SECURE`
- `CONTACT_TO` (destination inbox)
- `CONTACT_FROM` (optional; defaults to `SMTP_USER`)

## Rollout
- Add env vars to deployment platform.
- Validate submission by sending a test request and confirming delivery.
