# Contact Form Email Delivery Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the contact form send submissions to an inbox via SMTP using a secure server-side API route.

**Architecture:** The client posts JSON to `/api/contact`. A server handler validates input and calls a `sendMail` dependency, which the API route wires to an SMTP transport built from environment variables. The client shows success/error states based on the response.

**Tech Stack:** Next.js (App Router), React, TypeScript, nodemailer, Vitest.

### Task 1: Add test runner

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`

**Step 1: Write the failing test**
- Not applicable (infra task).

**Step 2: Run test to verify it fails**
- Not applicable.

**Step 3: Write minimal implementation**
- Add script and config:

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    clearMocks: true,
  },
})
```

- Update `package.json`:

```json
"scripts": {
  "test": "vitest run"
}
```

- Add dev dependency `vitest`.

**Step 4: Run test to verify it passes**
- `npm test` should run (no tests yet).

**Step 5: Commit**
```bash
git add package.json vitest.config.ts package-lock.json

git commit -m "chore: add vitest test runner"
```

### Task 2: Add failing tests for server handler

**Files:**
- Create: `tests/contact-handler.test.ts`

**Step 1: Write the failing test**

```ts
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

    expect(res.status).toBe(200)
    expect(sent.length).toBe(1)
  })

  it("rejects missing required fields", async () => {
    const sendMail = async () => {}

    const res = await handleContactRequest(
      makeRequest({ email: "ada@example.com", phone: "123" }),
      sendMail,
      { to: "to@example.com", from: "from@example.com" }
    )

    expect(res.status).toBe(400)
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

    expect(res.status).toBe(500)
  })
})
```

**Step 2: Run test to verify it fails**
Run: `npm test`
Expected: FAIL with “Cannot find module '../lib/contact-handler'”.

**Step 3: Write minimal implementation**
- Create `lib/contact-handler.ts` with `handleContactRequest` and validation.

**Step 4: Run test to verify it passes**
Run: `npm test`
Expected: PASS for `contact-handler` tests.

**Step 5: Commit**
```bash
git add tests/contact-handler.test.ts lib/contact-handler.ts

git commit -m "feat: add contact handler with validation"
```

### Task 3: Add env parsing tests and implementation

**Files:**
- Create: `tests/contact-env.test.ts`
- Create: `lib/contact-env.ts`

**Step 1: Write the failing test**

```ts
import { describe, it, expect, vi } from "vitest"
import { readContactEnv } from "../lib/contact-env"

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
  })
})
```

**Step 2: Run test to verify it fails**
Run: `npm test`
Expected: FAIL with “Cannot find module '../lib/contact-env'”.

**Step 3: Write minimal implementation**
- Add `readContactEnv` to parse env and default `from` to `SMTP_USER`.

**Step 4: Run test to verify it passes**
Run: `npm test`
Expected: PASS for env tests.

**Step 5: Commit**
```bash
git add tests/contact-env.test.ts lib/contact-env.ts

git commit -m "feat: add contact env parsing"
```

### Task 4: Add client submission helper tests and implementation

**Files:**
- Create: `tests/contact-client.test.ts`
- Create: `lib/contact-client.ts`

**Step 1: Write the failing test**

```ts
import { describe, it, expect, vi } from "vitest"
import { submitContactForm } from "../lib/contact-client"

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
```

**Step 2: Run test to verify it fails**
Run: `npm test`
Expected: FAIL with “Cannot find module '../lib/contact-client'”.

**Step 3: Write minimal implementation**
- Implement `submitContactForm` to call `/api/contact` and parse JSON.

**Step 4: Run test to verify it passes**
Run: `npm test`
Expected: PASS for client helper tests.

**Step 5: Commit**
```bash
git add tests/contact-client.test.ts lib/contact-client.ts

git commit -m "feat: add contact form submit helper"
```

### Task 5: Wire API route and SMTP integration

**Files:**
- Modify: `app/api/contact/route.ts` (create if missing)
- Create: `lib/contact-email.ts`

**Step 1: Write the failing test**
- Not applicable (route wiring uses already tested helpers).

**Step 2: Run test to verify it fails**
- Not applicable.

**Step 3: Write minimal implementation**
- `lib/contact-email.ts` builds SMTP transport and `sendMail` using nodemailer and config from `readContactEnv`.
- `route.ts` calls `handleContactRequest(request, sendMail, { to, from })`.

**Step 4: Run test to verify it passes**
Run: `npm test`
Expected: all tests pass.

**Step 5: Commit**
```bash
git add app/api/contact/route.ts lib/contact-email.ts

git commit -m "feat: add contact API route with SMTP"
```

### Task 6: Update ContactForm to use API

**Files:**
- Modify: `components/contact-form.tsx`

**Step 1: Write the failing test**
- Not applicable (UI test infra not in scope).

**Step 2: Run test to verify it fails**
- Not applicable.

**Step 3: Write minimal implementation**
- Replace simulated delay with `submitContactForm` call.
- Add error state and inline message on failure.

**Step 4: Run test to verify it passes**
Run: `npm test`
Expected: all tests pass.

**Step 5: Commit**
```bash
git add components/contact-form.tsx

git commit -m "feat: submit contact form via API"
```

### Task 7: Document environment variables

**Files:**
- Modify: `README.md`

**Step 1: Write the failing test**
- Not applicable.

**Step 2: Run test to verify it fails**
- Not applicable.

**Step 3: Write minimal implementation**
- Add a section describing required env vars for contact email.

**Step 4: Run test to verify it passes**
Run: `npm test`
Expected: all tests pass.

**Step 5: Commit**
```bash
git add README.md

git commit -m "docs: add contact form env vars"
```
