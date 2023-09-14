<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Header from './components/header/Header.svelte'

  import axios from 'axios';

  const url = 'https://api.hgbrasil.com/weather?key=e4a99fdf&city_name=Ponta%20Grossa';

  axios.get(url)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        // Agora você pode acessar os dados da resposta, por exemplo:
        const temperatura = data.results.temp;
        window.alert(`A temperatura em Ponta Grossa é ${temperatura}°C`);
      } else {
        window.alert(`A solicitação falhou com status ${response.status}`);
      }
    })
    .catch((error) => {
      window.alert(`Ocorreu um erro na solicitação: ${error.message}`);
    });

  //e4a99fdf
</script>

<main>
  <Header/>
  <h2>Ponta Grossa, PR</h2>
</main>

<style>
</style>
