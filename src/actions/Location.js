import axios from 'axios';

export const localizaPorCep = (cep, endereco) => {
  var lat = '';
  var lng = '';
  var address = {cep} || {endereco};
  var url =`https://maps.googleapis.com/maps/api/geocode/json?&address=${address}`;

  axios.get(url)
  .then( resp => {
    console.log(resp);
    //alert('Latitude: ' + lat + ' Logitude: ' + lng);  
   })
  .catch( error => console.log(error) );
}