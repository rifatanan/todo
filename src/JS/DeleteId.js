export default async function DeleteId(props) {
    const sendingMethod = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(props),
    };
    try {
        const response = await fetch(`/api/deleteid`, sendingMethod);
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
