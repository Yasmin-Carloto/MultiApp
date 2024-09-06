import axios from "axios"

export async function fetchIpAdress(ip) {
    try {
        const url = `https://ipinfo.io/${ip}/json`
        const response = await axios.get(url); 
        return {
            status: 200,
            response: response.data
        }
    } catch (error) {
        return {
            error: error,
            status: 404,
            message: "Not found"
        }
    }
}