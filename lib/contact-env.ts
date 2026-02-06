export type ContactEnv = {
  to: string
  from: string
  smtp: {
    host: string
    port: number
    secure: boolean
    user: string
    pass: string
  }
}

const requireEnv = (name: string) => {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required env var: ${name}`)
  }
  return value
}

export function readContactEnv(): ContactEnv {
  const host = requireEnv("SMTP_HOST")
  const portRaw = requireEnv("SMTP_PORT")
  const port = Number(portRaw)
  if (!Number.isFinite(port)) {
    throw new Error("SMTP_PORT must be a number")
  }

  const user = requireEnv("SMTP_USER")
  const pass = requireEnv("SMTP_PASS")
  const to = requireEnv("CONTACT_TO")
  const from = process.env.CONTACT_FROM?.trim() || user

  const secureEnv = process.env.SMTP_SECURE?.toLowerCase()
  const secure = secureEnv ? secureEnv === "true" : port === 465

  return {
    to,
    from,
    smtp: {
      host,
      port,
      secure,
      user,
      pass,
    },
  }
}
