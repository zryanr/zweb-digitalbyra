import { handleContactRequest } from "@/lib/contact-handler"
import { createContactSendMail } from "@/lib/contact-email"

export async function POST(request: Request) {
  const { sendMail, config } = createContactSendMail()
  return handleContactRequest(request, sendMail, config)
}
