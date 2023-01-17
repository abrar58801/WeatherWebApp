const cityName = document.getElementById('cityName');

const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_edit_val = document.getElementById('temp_edit_val');
const temp_Staus = document.getElementById('temp_status');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if( cityVal === ""){
        city_name.innerText = `Please Enter city name before Search`;
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=9677a631787eb4ee22e90147c9a95ede`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            
            var temp_real_val = arrData[0].main.temp;
            temp_real_val = temp_real_val.toString();
            // console.log("Original data: ",temp_real_val);
            temp_real_val = temp_real_val.slice(0, 2);
            temp_real_val = parseInt(temp_real_val);
            // console.log("Edited Data: ",temp_real_val);
            temp_edit_val.innerText = temp_real_val;

            
            const temp_Staus = arrData[0].weather[0].main;
            // console.log(arrData[0].weather[0].main);
            if (temp_Staus == "Clear") {
                temp_status.innerHTML = '<i class="fa-solid fa-sun fa-1x" style="color: #eccc68;"></i>';
            } else if (temp_Staus == "Clouds") {
                temp_status.innerHTML = '<i <i class="fa-solid fa-cloud fa-1x" style="color: #f1f2f6;"></i>';
            } else if (temp_Staus == "Rain") {
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain fa-1x" style="color: #a4b0be;"></i>';
            } else {
                temp_Staus.innerHTML = '<i class="fa-solid fa-sun fa-1x" style="color: #eccc68;"></i>';
            }

        }catch{
            city_name.innerText = `Please Enter City Name`;
        }
    }
}

submitBtn.addEventListener('click', getInfo);