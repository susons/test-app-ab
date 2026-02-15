import { z } from "zod";
import { contactSchema } from "@/shared/schemas/contact";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      setResponseStatus(event, 400);
      const flat = z.flattenError(parsed.error);

      return {
        errors: {
          ...flat.fieldErrors,
          ...(flat.fieldErrors?.["phone"]
            ? { phonePrefix: flat.fieldErrors?.["phone"] }
            : {}),
        },
      };
    }

    return { success: true, message: "Thank you! We'll get back to you." };
  } catch (err) {
    console.error(err);
    setResponseStatus(event, 500);
    return { error: "Internal server error" };
  }
});
