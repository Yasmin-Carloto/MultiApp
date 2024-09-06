export function generateJWT(payload) {
    const header = {
        alg: "HS256",
        typ: "JWT",
    };
    const base64Header = btoa(JSON.stringify(header));
    const base64Payload = btoa(JSON.stringify(payload));
    const signature = btoa("my-secret");
    
    return `${base64Header}.${base64Payload}.${signature}`;
}