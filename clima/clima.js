const axios = require('axios');
const getClima = async( lat, lng) => {
    //axios
    let resp = await(axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=bbede42a2a7221caf3cb7badcb42f8ae`))
    return resp.data.main.temp;
}

module.exports = {
    getClima
}