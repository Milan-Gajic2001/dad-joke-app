
 export async function getDadJoke(){
    try {
        const req = await fetch('https://icanhazdadjoke.com/',{method:"GET",  headers: {
            'Accept': 'application/json'  
        }});
        const res = await req.json()
        return res.joke;
    } catch (error) {
        throw new Error(error);
    }
 }