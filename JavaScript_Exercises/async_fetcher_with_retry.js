async function fetchWithRetry(url,options={},maxRetries=3,delay=1000)
{
  let lastError;

  for(let i=0;i<=maxRetries;i++)
  {
      try{
        const response=await fetch(url);
        if(!response.ok)
        {
            throw new Error(`HTTP Error: ${response.status}`);

        }
        return  await response.json();
      }
      catch(error)
      {
        lastError=error;
        console.warn(`Attempt ${i+1} failed. Retrying...`);
        if(i < maxRetries)
        {
            await new Promise(resolve=>setTimeout(resolve,delay*(i+1)))
        }

      }
  }
}

async function runTest() {
  console.log("--- Starting Test ---");
  try {

    //working one 
    // const data = await fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1');

    // there is no such url The "HTTP Error (404)" Test
    // const data = await fetchWithRetry('https://jsonplaceholder.typicode.com/this-page-does-not-exist');
    //Server Error (500) Test 
    const data = await fetchWithRetry('https://httpbin.org/status/500');
    console.log("Final Result:", data);
  } catch (err) {
    console.error("Final Failure after retries:", err.message);
  }
}

runTest();