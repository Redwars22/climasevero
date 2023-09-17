export default async function getWeatherData(query: string, API_KEY: string) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric&lang=pt`
  );

  const res = await data.text();

  return JSON.parse(res);
}
