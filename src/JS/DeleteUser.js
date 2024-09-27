export default async function DeleteUser(props) {
    const sendingMethod = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(props),
    };
    try {
        const response = await fetch(`/api/deleteuser`, sendingMethod);
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
