window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApi = 'https://getresumecounterpmt.azurewebsites.net/api/GetResumeCounter?code=WpTxBEu2B-Q8p8o9w_KnZZmLGplucFluhkTIWfND_mMgAzFu3BUkXw==';

const getVisitCount = () => {
    let count = 1;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function api.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}