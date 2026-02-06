export type ContactPayload = {
  name: string
  company?: string
  email: string
  phone: string
  package?: string
  message?: string
}

export type ContactConfig = {
  to: string
  from: string
}

export type SendMail = (input: {
  to: string
  from: string
  subject: string
  text: string
  replyTo?: string
}) => Promise<void>

const MAX_SHORT = 200
const MAX_MESSAGE = 1000

const toTrimmedString = (value: unknown, max: number) => {
  if (typeof value !== "string") return ""
  return value.trim().slice(0, max)
}

const isEmailLike = (value: string) => value.includes("@") && value.includes(".")

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  })

export async function handleContactRequest(
  request: Request,
  sendMail: SendMail,
  config: ContactConfig
): Promise<Response> {
  let payload: ContactPayload

  try {
    const raw = await request.json()
    const name = toTrimmedString(raw?.name, MAX_SHORT)
    const company = toTrimmedString(raw?.company, MAX_SHORT)
    const email = toTrimmedString(raw?.email, MAX_SHORT)
    const phone = toTrimmedString(raw?.phone, MAX_SHORT)
    const pkg = toTrimmedString(raw?.package, MAX_SHORT)
    const message = toTrimmedString(raw?.message, MAX_MESSAGE)

    if (!name) return jsonResponse(400, { ok: false, error: "Navn er påkrevd." })
    if (!email || !isEmailLike(email)) {
      return jsonResponse(400, { ok: false, error: "Ugyldig e-postadresse." })
    }
    if (!phone) return jsonResponse(400, { ok: false, error: "Telefon er påkrevd." })

    payload = {
      name,
      company: company || undefined,
      email,
      phone,
      package: pkg || undefined,
      message: message || undefined,
    }
  } catch (error) {
    return jsonResponse(400, { ok: false, error: "Ugyldig forespørsel." })
  }

  const lines = [
    `Navn: ${payload.name}`,
    payload.company ? `Bedrift: ${payload.company}` : null,
    `E-post: ${payload.email}`,
    `Telefon: ${payload.phone}`,
    payload.package ? `Pakke: ${payload.package}` : null,
    payload.message ? `Melding: ${payload.message}` : null,
  ].filter(Boolean)

  const subject = `Ny henvendelse fra ${payload.name}`
  const text = lines.join("\n")

  try {
    await sendMail({
      to: config.to,
      from: config.from,
      subject,
      text,
      replyTo: payload.email,
    })
  } catch (error) {
    return jsonResponse(500, {
      ok: false,
      error: "Kunne ikke sende forespørselen. Prøv igjen senere.",
    })
  }

  return jsonResponse(200, { ok: true })
}
