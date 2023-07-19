function getMap(address) {
  const url = `https://geocode-maps.yandex.ru/1.x/?apikey=22374f3c-7ab2-42ff-9f37-2234576d1cd6&lang=ru_RU&format=json&geocode=${address}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const coordinates =
        data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
          .split(' ')
          .map((el) => +el)
          .reverse();
      ymaps.ready(() => {
        const myMap = new ymaps.Map(
          'map',
          {
            center: coordinates,
            zoom: 12,
          },
          {
            searchControlProvider: 'yandex#search',
          }
        );

        const myPlacemark = new ymaps.Placemark(
          myMap.getCenter(),
          {
            hintContent: 'Ваша точка!',
          },
          {
            iconLayout: 'default#image',
            iconImageHref: './images/stop.png',
            iconImageSize: [32, 40],
            iconImageOffset: [-5, -38],
          }
        );
        myMap.geoObjects.add(myPlacemark);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

const main = document.getElementById('main');

main.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.name === 'self') {
    const { id } = event.target;
    const response = await fetch(`/self/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    window.location.href = '/self';
  }

  if (event.target.name === 'submit') {
    const { id } = event.target;
    try {
      const response = await fetch(`/reserve/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  }

  if (event.target.name === 'completed') {
    const { id } = event.target;
    try {
      const response = await fetch(`/completed/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      window.location.href = '/self';
    } catch (error) {
      console.log(error);
    }
  }

  if (event.target.name === 'show') {
    const { adress } = event.target.dataset;
    main.remove();
    const mapCont = document.getElementById('mapCont');
    mapCont.classList.add('mapCont');
    const map = document.getElementById('map');
    map.classList.add('map');
    getMap(adress);
  }
});
