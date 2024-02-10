// Get all clients
export async function getClients() {
    const response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()

    return result;
}

// Get specific client
export async function getClient(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const result = await response.json()

    return result;
}

// Create a new Client
export async function createClient(data) {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json'
            }
        })

        await response.json();

    } catch (error) {
        console.log(error);
    }
}

// Update client
export async function updateClient(id, data) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json'
            }
        })

        await response.json();

    } catch (error) {
        console.log(error);
    }
}

// Delete Client
export async function deleteClient(id) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "DELETE",
        })

        await response.json();

    } catch (error) {
        console.log(error);
    }
}