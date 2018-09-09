const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;

console.log(argv.direccion);

// mal hecho por mi
// lugar.getLugarLatLng(argv.direccion)
//     .then( resp => {
//         clima.getClima(resp.lat, resp.lng)
//         .then(nada => {
//             console.log(nada)
//         })
//     })
//     .catch(e => console.log(e));

//bien hecho
let getInfo = async(direccion) => {
    try{
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima ( coors.lat, coors.lng);
    
        return `El clima en ${coors.direccion} es de ${temp}`;
        
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }

}


getInfo( argv.direccion )
    .then( mensaje => console.log(mensaje) )
    .catch( e => console.log(e) );