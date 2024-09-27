import { z } from 'zod';

export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'Name must be at least 3 characters long.' })
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-z]/, { message: 'Contain at least one small letter.' })
        .regex(/[A-Z]/, { message: 'Contain at least one capital letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
});
