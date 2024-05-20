import {z} from "zod";

export const TUserSchema = z.object({
    id: z.string(),
    username: z.string().min(1, {message: "Username is required"}),
    password: z.string().min(1, {message: "Password is required"}), 
    email: z.string(),
});

