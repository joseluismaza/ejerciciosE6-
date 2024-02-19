/*5.1 Dado el siguiente array, utiliza.filter() para generar un nuevo array 
con los valores que sean mayor que 18*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mas18 = ages.filter(edad => edad > 18);
console.log(mas18);

/*5.2 Dado el siguiente array, utiliza.filter() para generar un nuevo array 
con los valores que sean par.*/
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const edadpar = ages2.filter(edad => edad % 2 === 0);
console.log(edadpar);


/*5.3 Dado el siguiente array, utiliza.filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const streamerslol = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends')
console.log(streamerslol);

/*5.4 Dado el siguiente array, utiliza.filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad.name.Recomendamos 
usar la funcion.includes() para la comprobación.*/
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const streamers2U = streamers2.filter(streamerU => streamerU.name.includes('u'));
console.log(streamers2U);

/*5.5 utiliza.filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad.gameMorePlayed.Recomendamos usar la funcion
  .includes() para la comprobación.
    Además, pon el valor de la propiedad.gameMorePlayed a MAYUSCULAS cuando
      .age sea mayor que 35.*/

const streamersLegends = streamers2.filter(streamer => {
  if (streamer.gameMorePlayed.includes('Legends')) {
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return true;
  }
  return true;
});

console.log(streamersLegends);