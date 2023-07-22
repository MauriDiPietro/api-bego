import axios from 'axios';
import config from '../config/config';
const API_KEY_GOOGLE = config.API_KEY_GOOGLE;

export const getCoordinatesFromAddress = async(address: string)=> {
    try {
      const response = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            address: address,
            key: API_KEY_GOOGLE,
          },
        }
      );
  
      const results = response.data.results;
      if (results.length > 0) {
        const location = results[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;
        return { latitude, longitude };
      } else {
        throw new Error('No se encontraron resultados para la dirección proporcionada.');
      }
    } catch (error) {
      throw new Error('Error al obtener las coordenadas: ' + error);
    }
};

/**
 * 
 * @param origin coordenada de origen
 * @param destination coordenada de destino
 * @returns distancia en KM entre coordenadas
 */
export const getDistanceFromCoordinates = async(origin: string, destination: string) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/directions/json', {
      params: {
        origin: origin,
        destination: destination,
        key: API_KEY_GOOGLE,
        units: 'metric', // Para obtener la distancia en kilómetros
      },
    });

    const routes = response.data.routes;
    if (routes.length > 0) {
      const distance = routes[0].legs[0].distance.text;
      return distance;
    } else {
      throw new Error('No se encontraron rutas para las coordenadas proporcionadas.');
    }
  } catch (error) {
    throw new Error('Error al obtener la distancia: ' + error);
  }
}