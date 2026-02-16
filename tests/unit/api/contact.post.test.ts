import { describe, it, expect, vi, beforeEach } from "vitest";
import type { H3Event } from "h3";

const readBodyMock = vi.fn<(event: H3Event) => Promise<unknown>>();

describe("contact API (unit)", () => {
  beforeEach(() => {
    vi.resetModules();
    readBodyMock.mockReset();

    vi.stubGlobal("defineEventHandler", (fn: unknown) => fn);
    vi.stubGlobal("readBody", readBodyMock);
  });

  it("returns errors when body is invalid", async () => {
    readBodyMock.mockResolvedValue({ email: "bad" });

    const handler = (await import("~~/server/api/contact.post")).default;
    const res = await handler({} as unknown as H3Event);

    expect(res).toHaveProperty("errors");
  });

  it("returns success when body is valid", async () => {
    readBodyMock.mockResolvedValue({
      name: "John Doe",
      email: "john@doe.com",
      phone: "+3711234567",
      flightNumber: "BT123",
      flightDate: 1,
      flightMonth: 1,
      flightYear: 2026,
    });

    const handler = (await import("~~/server/api/contact.post")).default;
    const res = await handler({} as unknown as H3Event);

    expect(res).toEqual({
      success: true,
      message: "Thank you! We'll get back to you.",
    });
  });
});
