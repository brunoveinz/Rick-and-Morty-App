import axios from 'axios';
import { Personaje } from '../../models/Personajes';

export async function ObtenerPersonajes() {
    return axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        const personajesData = response.data.results;
        const personajesInstances = personajesData.map(data =>
          new Personaje(
            data.id,
            data.name,
            data.status,
            data.species,
            data.type,
            data.gender,
            data.origin,
            data.location,
            data.image,
            data.episode,
            data.url,
            data.created
          )
        );
        return personajesInstances;
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        return []; // Retorna un array vacío en caso de error
      });
  }