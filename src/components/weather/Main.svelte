<script lang="ts">
  import getWeatherData from '../../api/getWeatherData.ts';
  import {API_KEY} from '../../api/auth.ts';
  //import IWeatherData from "../../api/types.ts";

  let data;

  document.addEventListener("DOMContentLoaded", async function() {
      data = await getWeatherData("Ponta%20Grossa", API_KEY);
  });
</script>

<div>
  <h1>{data.name}</h1>
</div>

<style></style>