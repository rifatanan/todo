export default async function dataSubmit(props) {
    const sendingMethod = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(props),
    };

    const response = await fetch('/api/taskcreate', sendingMethod);
    const responseJson = await response.json();
    return responseJson;
}
