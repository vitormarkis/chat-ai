import { Message } from "ai"
import { nanoid } from "nanoid"

export const messages = [
  {
    id: nanoid(),
    content: `
    Small lib for UUID's?
    `,
    role: "user",
  },
  {
    id: nanoid(),
    content: `
    To generate a random UUID in a Next.js application, you can use the uuid library, which is a popular choice for this task in the JavaScript and Node.js ecosystems. Another viable alternative is the nanoid library.
    Here's a step-by-step guide on how to use these libraries:
    `,
    role: "assistant",
  },
  {
    id: nanoid(),
    content: `
    I need more details
    `,
    role: "user",
  },
  {
    id: nanoid(),
    content: `
    general, when you want to generate a random UUID or a unique ID in JavaScript or Node.js, the uuid and nanoid libraries are excellent choices due to their ease of use, support, and flexibility. In the future, when faced with similar problems, consider looking into widely-accepted libraries and use their official documentation as a reference. These libraries often provide a standard, tested, and efficient solution, reducing the risk of introducing bugs or security issues compared to a custom approach.

    Just make sure to consider your specific needs. For example, nanoid generates URL-friendly unique strings, which work well for URL shorteners, while uuid generates standardized 128-bit unique IDs, which are ideal when strict compliance with the UUID specification is required.
    `,
    role: "assistant",
  },
] satisfies Message[]
