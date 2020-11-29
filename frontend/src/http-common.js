import axios from "axios";
import Cookies from 'js-cookie'
/*
  Reemplazar el valore de ACCESS_TOKEN por el que regresa el siguiente request en access_token:

  curl --location --request POST 'https://dev-377919.okta.com/oauth2/default/v1/token' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Cookie: DT=DI0SZuRxKydSIiO8OjxSZIhYw' \
  --data-urlencode 'grant_type=client_credentials' \
  --data-urlencode 'client_id=0oa1d45i5MRmrcHiN5d6' \
  --data-urlencode 'client_secret=bA3TjtmBvH_VMus-akv3spczbot6bYW2j0VhyJFC' \
  --data-urlencode 'scope=nefrovida_api'
*/
var qs = require('qs');
const data = qs.stringify({
 'grant_type': 'client_credentials',
'client_id': '0oa1d45i5MRmrcHiN5d6',
'client_secret': 'bA3TjtmBvH_VMus-akv3spczbot6bYW2j0VhyJFC',
'scope': 'nefrovida_api' 
});

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://api.snefrovidaac.com'
};
const ACCESS_TOKEN = Cookies.get('JWT');
axios.post('https://dev-377919.okta.com/oauth2/default/v1/token', data)
  .then(response => {
    Cookies.set("JWT", response.data.access_token)
    console.log(JSON.stringify(response.data));
  })
  .catch(error => {
    console.log(error);
  })

export default axios.create({
  baseURL: "https://api.snefrovidaac.com/api",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer "+ACCESS_TOKEN
  },
});
