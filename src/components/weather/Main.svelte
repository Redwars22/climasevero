<script>
  import {getWeatherData} from '../../api/getWeatherData.ts';
  import {API_KEY} from '../../api/auth.ts'

  document.addEventListener("DOMContentLoaded", async function() {
      await getWeatherData("Ponta%20Grossa", API_KEY);
  });
</script>

<div></div>

<style></style>