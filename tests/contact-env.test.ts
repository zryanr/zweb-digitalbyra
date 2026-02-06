import { describe, it, expect, vi, afterEach } from "vitest"
import { readContactEnv } from "../lib/contact-env"

afterEach(() => {
  vi.unstubAllEnvs()
})

describe("readContactEnv", () => {
  it("throws when required vars are missing", () => {
    vi.stubEnv("SMTP_HOST", "")
    expect(() => readContactEnv()).toThrow()
  })

  it("returns config when env is set", () => {
    vi.stubEnv("SMTP_HOST", "smtp.example.com")
    vi.stubEnv("SMTP_PORT", "587")
    vi.stubEnv("SMTP_USER", "user@example.com")
    vi.stubEnv("SMTP_PASS", "pass")
    vi.stubEnv("CONTACT_TO", "to@example.com")

    const cfg = readContactEnv()

    expect(cfg.to).toBe("to@example.com")
    expect(cfg.from).toBe("user@example.com")
    expect(cfg.smtp.port).toBe(587)
  })
})
