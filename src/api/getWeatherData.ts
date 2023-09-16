export default async function getWeatherData(query: string, API_KEY: string) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`
  );

  const res = await data.text();

  window.alert('chamou-me');

  return JSON.parse(res);
}
