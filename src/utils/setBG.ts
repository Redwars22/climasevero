const BG_SET: string[] = [
  'https://www.wellahealth.com/blog/wp-content/uploads/2021/09/6-ways-to-stay-healthy-during-the-rainy-season.jpg',
  'https://cdn.pixabay.com/photo/2017/06/09/17/44/sky-2387734_1280.jpg',
];

const setBG = (bg: number) => {
  const body = document.body;

  body.style.backgroundImage = `url('${BG_SET[bg]}')`;
  body.style.backgroundSize = 'cover';
};

export const getWeatherBGFromString = (id: string) => {
  switch (id) {
    case 'Rain':
      setBG(0);
      break;
    case 'Clouds':
      setBG(1);
      break;
  }
};
