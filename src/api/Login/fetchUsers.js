import axios from "axios"

export async function fetchUsers() {
    try {
        const response = await axios.get("http://localhost:3000/users")
        return response.data
    }catch(error){
        return {
            status: 400,
            message: `Erro: ${error}`
        }
    }
}

