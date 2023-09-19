<script>
  export let icon;
  export let temperature;
  export let feels_like;
  export let description;
</script>

<div class="temperature-container">
  <div class="vertical">
    <img src="https://openweathermap.org/img/wn/{icon}@2x.png"/>
    <h5>{description}</h5>
  </div>
  <div class="vertical">
    <h2>{temperature}ºC</h2>
    <span>Sensação: {feels_like}ºC</span>
  </div>
</div>

<style>
  .temperature-container {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px dashed lightblue;
  }
  
  div {
    display: flex;
  }

  .vertical {
    flex-direction: column;
  }
</style>