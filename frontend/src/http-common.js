import axios from "axios";

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
export const ACCESS_TOKEN = "eyJraWQiOiJnV0VxYl9EUDExX0VUVEg4NGR0SlVUdVBoMkhBNjdYWFJxNzltTS04M0NNIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnFacjV3dDhfNDF1WDNhVE1uTkc1MXBLMWJBUno0cDlEYVg0c1loaUNlVmsiLCJpc3MiOiJodHRwczovL2Rldi0zNzc5MTkub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjA2MzIyNTc3LCJleHAiOjE2MDYzMjYxNzcsImNpZCI6IjBvYTFkNDVpNU1SbXJjSGlONWQ2Iiwic2NwIjpbIm5lZnJvdmlkYV9hcGkiXSwic3ViIjoiMG9hMWQ0NWk1TVJtcmNIaU41ZDYifQ.iQ5jxyJRslekr1JTYoE2V_trlhEOhYX0s38CqoNcgfcQT6Y4-CpnLa74flDioDQBofPWVq_s3jGyU92BMEgDxPDWW2PfcNrG3sg3miOyF17-67DYX6OqRcHf51eGjaKmDXFYVp9wQ5gEfXamjAklpk6i44XJeRuZAs8op3mHo2qGtt8-dCDBVxJ9sWUCh87uu05p4cWjWFUknHjYvapZFYEyWGpS0BiQQA5L4hirOUVRu6pt3dJ6YDTw48xjhHNDlX0-0VvKS8_sI5uAhxURlDWy7raQ6jzAbLfGVr4xhZfXOT-RZgDWyGSjo9ZNJOo2RPUREChV1ZSY4fN-VqXG-g"
export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer "+ACCESS_TOKEN
  },
});
