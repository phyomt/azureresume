window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApiURL = 'https://getresumecounterpmt.azurewebsites.net/api/GetResumeCounter?code=iI0ze4PNdlljmzxHBc76F3squ_lOjETBxQF4X0EcdK7XAzFu_tV_9g==';

const getVisitCount = () => {
    let count = 1;
    fetch(localFunctionApi).then(response => {
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