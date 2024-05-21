import { z } from "zod";

export const TUserLoginSchema = z.object({
  username: z
    .string({ required_error: "Cannot Be Empty" })
    .min(1, { message: "Username is required" }),
  password: z
    .string({ required_error: "Cannot Be Empty" })
    .min(1, { message: "Password is required" }),
});
export const TUserRegisterSchema = z.object({
  id: z.string(),
  username: z
    .string({ required_error: "Cannot Be Empty" })
    .min(1, { message: "Username is required" }),
  email: z
    .string({ required_error: "Cannot Be Empty" })
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid Email" }),
  password: z
    .string({ required_error: "Cannot Be Empty" })
    .min(1, { message: "Password is required" }),
});
