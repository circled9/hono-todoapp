import {} from 'hono'

type Head = {
  title?: string
}

declare module 'hono' {
  interface Env {
    // biome-ignore lint/complexity/noBannedTypes: <explanation>
    Variables: {}
    // biome-ignore lint/complexity/noBannedTypes: <explanation>
    Bindings: {}
  }
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head,
    ): Response | Promise<Response>
  }
}
