import { z } from "zod";

export const loginSchema = z.object({
  name: z
    .string()
    .min(6, { message: "Username must be more than 5 characters" }),

  password: z
    .string()
    .min(6, { message: "Password must be more than 5 characters" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      {
        message:
          "Password must contain at least one uppercase, one lowercase, one number, and one special character",
      }
    ),
});
