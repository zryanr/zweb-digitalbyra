import type { ContactPayload } from "./contact-handler"

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string }

const DEFAULT_ERROR = "Noe gikk galt. Vennligst prøv igjen."

export async function submitContactForm(
  payload: ContactPayload
): Promise<SubmitResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  })

  let data: { ok?: boolean; error?: string } | null = null

  try {
    data = await response.json()
  } catch (error) {
    data = null
  }

  if (!response.ok || !data?.ok) {
    return { ok: false, error: data?.error || DEFAULT_ERROR }
  }

  return { ok: true }
}
