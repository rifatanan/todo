'usee client';
import { SignupFormSchema } from '@/utilitys/Zod';

export async function signup(state, formData) {
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });

    // If any form fields are invalid, return early
    // if (!validatedFields.success) {
    //     return {
    //         //errors: validatedFields.error.flatten().fieldErrors,
    //     };
    // }
    // return validatedFields;
    // Call the provider or db to create a user...
}
