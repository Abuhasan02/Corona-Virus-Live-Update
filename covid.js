const fetchCovidData = ()=>{
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => displayCovidData(data));
}
fetchCovidData();

const displayCovidData = allData => {
    const tableData = document.getElementById("covidData");

        let getData = allData.Global;
        const dataSet = `
            <td>${getData.TotalConfirmed}</td>
            <td>${getData.TotalDeaths}</td>
            <td>${getData.TotalRecovered}</td>
        `;
        tableData.innerHTML = dataSet;
        // tableData.appendChild(getData);
        // console.log(getData);
}

function refreshData(){
    fetchCovidData();
}