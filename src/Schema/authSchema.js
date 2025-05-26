import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    password_confirmation: z.string().min(6, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords do not match",
  });

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
