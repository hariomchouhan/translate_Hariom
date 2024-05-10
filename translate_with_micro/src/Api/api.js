import axios from "axios";

export function getLanguages() {
  return axios.get(
    "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    {
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "c1936df579msh545ecf0809fe995p1c999djsnb1e11c65f5ba",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
    }
  );
}

export function translateData() {
  return axios.post(
    "https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&textType=plain&profanityAction=NoAction&to[0]=hi&from=en",
    {
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "c1936df579msh545ecf0809fe995p1c999djsnb1e11c65f5ba",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
    }, []
  );
}
