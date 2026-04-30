async function getUsers(url)
{
    try{
        const response=await fetch(url);
        console.log("response==",response);
        if(!response.ok)
        {
            throw new Error(`HTTP Error! Status: ${response.status}`)
        }
        const userData=await response.json();
        console.log("userData",userData)
    }
    catch(error)
    {
        console.error("Fetch Failed",error.message);
        return null;
    }
}
getUsers('https://jsonplaceholder.typicode.com/users');