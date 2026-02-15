import { z } from "zod";

const day = z.coerce
  .number()
  .int({ message: "Day must be a whole number" })
  .min(1, { message: "Day must be between 1 and 31" })
  .max(31, { message: "Day must be between 1 and 31" });

const month = z.coerce
  .number()
  .int({ message: "Month must be a whole number" })
  .min(1, { message: "Month must be between 1 and 12" })
  .max(12, { message: "Month must be between 1 and 12" });

const year = z.coerce
  .number()
  .int({ message: "Year must be a whole number" })
  .min(2025, { message: "Year must be 2025 or later" })
  .max(2100, { message: "Year must be 2100 or earlier" });

export const contactSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Name is required" }),
    email: z.email({ message: "Invalid email" }),
    phone: z
      .string()
      .trim()
      .min(7, { message: "Phone is too short" })
      .max(20, { message: "Phone is too long" }),
    flightNumber: z
      .string()
      .trim()
      .min(2, { message: "Flight number is required" })
      .max(10, { message: "Flight number is too long" }),
    flightDate: day,
    flightMonth: month,
    flightYear: year,
  })

  .superRefine((d, ctx) => {
    const dt = new Date(d.flightYear, d.flightMonth - 1, d.flightDate);

    const ok =
      dt.getFullYear() === d.flightYear &&
      dt.getMonth() === d.flightMonth - 1 &&
      dt.getDate() === d.flightDate;

    if (!ok) {
      ctx.addIssue({
        code: "custom",
        path: ["flightDate"],
        message: "Invalid date",
      });
    }
  });

export type BookingInput = z.infer<typeof contactSchema>;
