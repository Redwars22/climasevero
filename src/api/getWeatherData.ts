import { getWeatherBGFromString } from '../utils/setBG';

export default async function getWeatherData(
  query: string,
  API_KEY: string,
  debug: boolean
) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric&lang=pt`
  );

  const res = await data.text();

  if (debug) console.log(JSON.parse(res));

  getWeatherBGFromString(JSON.parse(res)?.weather[0].main);

  return JSON.parse(res);
}
