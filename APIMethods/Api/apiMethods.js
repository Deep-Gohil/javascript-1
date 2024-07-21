export const ApiMethods = async() =>{
    post: async(user) => {
        let request = await fetch(`http://localhost:3000/users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
    }
}