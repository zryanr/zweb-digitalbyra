import nodemailer from "nodemailer"
import { readContactEnv } from "./contact-env"
import type { SendMail } from "./contact-handler"

export function createContactSendMail(): {
  sendMail: SendMail
  config: { to: string; from: string }
} {
  const env = readContactEnv()

  const transport = nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.secure,
    auth: {
      user: env.smtp.user,
      pass: env.smtp.pass,
    },
  })

  const sendMail: SendMail = async (input) => {
    await transport.sendMail(input)
  }

  return {
    sendMail,
    config: { to: env.to, from: env.from },
  }
}
