export default async function getAllData() {
    const sendingMethod = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch('/api/getall', sendingMethod);
    return response.json();
}
