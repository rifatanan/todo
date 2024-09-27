export default async function getData(props) {
    let valueJson;

    const sendingMethod = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(props),
    };

    try {
        let response = await fetch('/api/get', sendingMethod);
        valueJson = await response.json();
    } catch (error) {
        valueJson = error;
    }
    return valueJson;
}
