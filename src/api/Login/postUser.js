import axios from "axios"

export async function createUser(user) {
    try {
        await axios.post("http://localhost:3000/users", {
            email: user.email,
            password: user.password
        })
        return {
            status: 200,
            message: "Susscefull request",
        }
    }catch(error){
        console.error({
            status: 400,
            message: "Not found"
        })
    }
}