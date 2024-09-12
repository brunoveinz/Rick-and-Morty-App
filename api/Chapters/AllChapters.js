import axios from 'axios';
import { Capitulo } from '../../models/Capitulos';

export async function ObtenerCapitulos() {
    return axios.get('https://rickandmortyapi.com/api/episode')
        .then(response =>{
            const ChaptersData = response.data.results;
            const Capitulos = ChaptersData.map(data => 
                new Capitulo(data.id, data.name, data.air_date, data.episode, data.characters, data.url, data.created))
                return Capitulos;
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            return [];
        });
}
