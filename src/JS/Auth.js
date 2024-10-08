import { SignupFormSchema } from '@/utilitys/Zod';

export async function signup(state, formData) {
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });
}
