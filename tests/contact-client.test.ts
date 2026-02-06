import { describe, it, expect, vi, afterEach } from "vitest"
import { submitContactForm } from "../lib/contact-client"

afterEach(() => {
  vi.unstubAllGlobals()
})

describe("submitContactForm", () => {
  it("returns ok on success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "content-type": "application/json" },
        })
      )
    )

    const result = await submitContactForm({
      name: "Ada",
      email: "ada@example.com",
      phone: "123",
    })

    expect(result.ok).toBe(true)
  })

  it("returns error message on failure", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ ok: false, error: "Fail" }), {
          status: 500,
          headers: { "content-type": "application/json" },
        })
      )
    )

    const result = await submitContactForm({
      name: "Ada",
      email: "ada@example.com",
      phone: "123",
    })

    expect(result.ok).toBe(false)
    expect(result.error).toBe("Fail")
  })
})
