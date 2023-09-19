<script lang="ts">
  import getWeatherData from '../../api/getWeatherData.ts';
  import {API_KEY} from '../../api/auth.ts';
  import Temperature from './Temperature.svelte';
  //import IWeatherData from "../../api/types.ts";

  let data;
  let loading;

  document.addEventListener("DOMContentLoaded", async function() {
    loading = true;
    data = await getWeatherData("Dubai", API_KEY);
    loading = false;
  });

  window.onload = () => document.getElementById("search-btn").addEventListener("click", async () => {
    loading = true;
    let query = document.getElementById("search").value;
    data = await getWeatherData(query, API_KEY, true);
    loading = false;
  })
</script>

<div class="main-container">
{#if !loading}
  <h1>{data?.name.toUpperCase()}</h1>

  <div class="weather-card">
    <Temperature 
      icon={data?.weather[0].icon}
      temperature={data?.main?.temp.toFixed(1)}
      feels_like={data?.main?.feels_like}
      description={data?.weather[0]?.description}
      min={data?.main?.temp_min.toFixed(1)}
      max={data?.main?.temp_max.toFixed(1)}
    />
    <div class="flex-wrap">
      <div>
        <h6><i class="bi bi-cloud-fog2"></i> Visibilidade: {data?.visibility}m</h6>
        <h6><i class="bi bi-water"></i> Umidade: {data?.main?.humidity}%</h6>
      </div>
      <div>
        <h6><i class="bi bi-wind"></i> Vento: {data?.wind?.speed}m/s</h6>
        <h6><i class="bi bi-thermometer-low"></i> Pressão: {data?.main?.pressure}hPa</h6>
      </div>
    </div>
  </div>
{/if}
{#if loading}
  <h4>Carregando...</h4>
{/if}
</div>

<style>
  .weather-card {
    background-color: #002f68;
    padding: 10px;
    border-radius: 10px;
    border: 4px solid #1572e540;
    width: 90%;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 900px) {
    .weather-card {
      background-color: #002f68;
      padding: 10px;
      border-radius: 10px;
      border: 4px solid #1572e540;
      width: 50%;
    }
  }

  .flex-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .main-container {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>