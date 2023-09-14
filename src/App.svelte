<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Header from './components/header/Header.svelte'
const url = 'https://api.hgbrasil.com/weather?key=e4a99fdf&city_name=Ponta_Grossa';

function fetchWeatherData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          const errorMessage = `A solicitação falhou com status ${response.status}`;
          window.alert(errorMessage); // Use window.alert para exibir o erro
          throw new Error(errorMessage);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        window.alert(`Ocorreu um erro na solicitação: ${error.message}`); // Use window.alert para exibir o erro
        reject(error);
      });
  });
}

fetchWeatherData(url)
  .then((data) => {
    // Agora você pode acessar os dados da resposta, por exemplo:
    const temperatura = data.results.temp;
    window.alert(`A temperatura em Ponta Grossa é ${temperatura}°C`); // Use window.alert para exibir o resultado
  })
  .catch((error) => {
    console.error(`Ocorreu um erro na solicitação: ${error.message}`);
  });


  //e4a99fdf
</script>

<main>
  <Header/>
  <h2>Ponta Grossa, PR</h2>
</main>

<style>
</style>
