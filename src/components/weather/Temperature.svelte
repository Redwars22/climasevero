<script>
  export let icon;
  export let temperature;
  export let feels_like;
  export let description;
  export let min;
  export let max;
</script>

<section>
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
  <div class="horizontal">
    <h6 style="color: #0d82d5">MIN: {min}ºC</h6>
    <h6 style="color: #f74528">MAX: {max}ºC</h6>
  </div>
</section>

<style>
  .temperature-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  section {
    border-bottom: 1px dashed lightblue;
  }

  div {
    display: flex;
  }

  .vertical {
    flex-direction: column;
  }

  .horizontal {
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
</style>