async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let text = document.getElementById('text').value
    let error = document.getElementById('error')
    let results = document.getElementById('apiresults')

    await Client.getResponse(text)
    if (text === '') {
        error.classList.remove('hide');
        results.classList.add('hide');
    }else{
        error.classList.add('hide');
        results.classList.remove('hide');
        refreshUI()
    }
}


const refreshUI = async () => {
    const request = await fetch('http://localhost:8081/all');
    try{
        const allData = await request.json();
        document.getElementById('agreement').innerHTML = `Agreement: ${allData.agreement}`;
        document.getElementById('irony').innerHTML = `Irony: ${allData.irony}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${allData.subjectivity}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${allData.confidence}%`;
    }catch(error){
        console.log(error);
    }
}


export { handleSubmit }
export { refreshUI }
