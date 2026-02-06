import { describe, it, expect, vi, afterEach } from "vitest"
import nodemailer from "nodemailer"
import { createContactSendMail } from "../lib/contact-email"

afterEach(() => {
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

describe("createContactSendMail", () => {
  it("creates transport from env and sends mail", async () => {
    vi.stubEnv("SMTP_HOST", "smtp.example.com")
    vi.stubEnv("SMTP_PORT", "587")
    vi.stubEnv("SMTP_USER", "user@example.com")
    vi.stubEnv("SMTP_PASS", "pass")
    vi.stubEnv("CONTACT_TO", "to@example.com")

    const sendMailSpy = vi.fn().mockResolvedValue({})
    vi.spyOn(nodemailer, "createTransport").mockReturnValue({
      sendMail: sendMailSpy,
    } as unknown as nodemailer.Transporter)

    const { sendMail, config } = createContactSendMail()

    expect(config.to).toBe("to@example.com")
    expect(config.from).toBe("user@example.com")

    await sendMail({
      to: "to@example.com",
      from: "from@example.com",
      subject: "Test",
      text: "Body",
      replyTo: "reply@example.com",
    })

    expect(nodemailer.createTransport).toHaveBeenCalledWith({
      host: "smtp.example.com",
      port: 587,
      secure: false,
      auth: { user: "user@example.com", pass: "pass" },
    })
    expect(sendMailSpy).toHaveBeenCalledWith({
      to: "to@example.com",
      from: "from@example.com",
      subject: "Test",
      text: "Body",
      replyTo: "reply@example.com",
    })
  })
})
