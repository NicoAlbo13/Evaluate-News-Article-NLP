import "babel-polyfill"

const getResponse = async(text) => {

  const apikey = await getData('http://localhost:8081/key')

  const formdata = new FormData();
  formdata.append("key", apikey.key);
  formdata.append("txt", text);
  formdata.append("lang", "en");
  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  const serverRes = postData('https://api.meaningcloud.com/sentiment-2.1', requestOptions)
  .then(function(data){
    const responseData = {agreement: data.agreement, irony: data.irony, subjectivity: data.subjectivity, confidence: data.confidence}
    const options = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(responseData),
    }
    postData("http://localhost:8081/add", options)
  })
}



const getData = async (url)=>{
  const res = await fetch(url);
  try{
      const data = await res.json();
      console.log(data)
      return data;
  }
  catch(error){
      console.log(error);
  }
}

/* Function to POST data */
const postData = async(url, data)=>{
  //console.log(data);
  console.log(JSON.stringify(data));
  const res = await fetch(url, data);
  try{
      const newData = await res.json();
      console.log(newData)
      return newData
  } catch(error){
      console.log(error);
  }
}


export{ getResponse }
export{ getData }
export{ postData }
