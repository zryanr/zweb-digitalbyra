import { describe, it, expect } from "vitest"
import { handleContactRequest } from "../lib/contact-handler"

const makeRequest = (body: unknown) =>
  new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  })

describe("handleContactRequest", () => {
  it("sends email for valid payload", async () => {
    const sent: unknown[] = []
    const sendMail = async (input: unknown) => {
      sent.push(input)
    }

    const res = await handleContactRequest(
      makeRequest({ name: "Ada", email: "ada@example.com", phone: "123" }),
      sendMail,
      { to: "to@example.com", from: "from@example.com" }
    )

    const body = await res.json()

    expect(res.status).toBe(200)
    expect(body.ok).toBe(true)
    expect(sent.length).toBe(1)
  })

  it("rejects missing required fields", async () => {
    const sendMail = async () => {}

    const res = await handleContactRequest(
      makeRequest({ email: "ada@example.com", phone: "123" }),
      sendMail,
      { to: "to@example.com", from: "from@example.com" }
    )

    const body = await res.json()

    expect(res.status).toBe(400)
    expect(body.ok).toBe(false)
  })

  it("returns 500 when sendMail throws", async () => {
    const sendMail = async () => {
      throw new Error("smtp")
    }

    const res = await handleContactRequest(
      makeRequest({ name: "Ada", email: "ada@example.com", phone: "123" }),
      sendMail,
      { to: "to@example.com", from: "from@example.com" }
    )

    const body = await res.json()

    expect(res.status).toBe(500)
    expect(body.ok).toBe(false)
  })
})
