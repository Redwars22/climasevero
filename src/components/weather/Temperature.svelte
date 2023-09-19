<script>
  export let icon;
  export let temperature;
  export let feels_like;
  export let description;
</script>

<div>
  <img src="https://openweathermap.org/img/wn/{icon}@2x.png"/>
    <h2>{temperature}ºC</h2>
    <span>Sensação: {.feels_like}ºC</span>
    <h5>{description}</h5>
</div>