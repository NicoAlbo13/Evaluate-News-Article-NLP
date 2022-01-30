const refreshUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('results').innerHTML = allData;
    }catch(error){
      console.log(error);
    }
}

export{refreshUI}
