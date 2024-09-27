export default async function checkUser(props) {
    const sendingMethod = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(props),
    };

    try {
        const response = await fetch('/api/login', sendingMethod);
        const responseJson = await response.json();
        if (responseJson.data !== null) return responseJson;
    } catch (error) {
        return error;
    }
}
