function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    getData('/key')
    .then(function(data){
        getData('https://api.meaningcloud.com/sentiment-2.1?key='+data+'&of=json&url='+formText+'&lang=en')
    })
    .then(function(data){
        postData('/add', {response:data})
    })
    .then(function(data){
        refreshUI()
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

const postData = async(url, data)=>{
    //console.log(data);
    console.log(JSON.stringify(data));
    const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });
    try{
        const newData = await res.json();
        console.log(newData)
        return newData
    } catch(error){
        console.log(error);
    }
}


export { handleSubmit }
