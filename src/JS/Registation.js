import bcrypt from 'bcryptjs';
import { SignupFormSchema } from './Zod';

export default async function createUser(newTodo) {
    const result = SignupFormSchema.safeParse(newTodo);
    if (!result.success) {
        let errorMessage = '';
        result.error.issues.forEach(issue => {
            errorMessage =
                errorMessage + issue.path[0] + ': ' + issue.message + '.';
        });
        return result.error.issues;
    } else {
        let { name, email, password } = newTodo;
        let auth = await bcrypt.hashSync(email, process.env.BCRYPT_SALT);
        password = await bcrypt.hashSync(password, process.env.BCRYPT_SALT);
        const sendingMethod = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, auth }),
        };

        const response = await fetch('/api/usercreate', sendingMethod);
        const responseJson = await response.json();
        return responseJson;
    }
}
