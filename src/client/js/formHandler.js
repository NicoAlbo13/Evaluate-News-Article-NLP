async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let text = document.getElementById('text').value
    
    await Client.getResponse(text)
    refreshUI()
}


const refreshUI = async () => {
    const request = await fetch('http://localhost:8081/all');
    try{
        const allData = await request.json();
        document.getElementById('agreement').innerHTML = allData.agreement;
        document.getElementById('irony').innerHTML = allData.irony;
        document.getElementById('subjectivity').innerHTML = allData.subjectivity;
        document.getElementById('confidence').innerHTML = allData.confidence;
    }catch(error){
        console.log(error);
    }
}


export { handleSubmit }
export { refreshUI }
