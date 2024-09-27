export default async function dataSendId(props) {
    const sendingMethod = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(props),
    };

    const response = await fetch('/api/update', sendingMethod);
    return response.json();
}
