import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();
const GOOGLE_MAPS_API_KEY = 'AIzaSyD_p6tMnyQA4eAnODH2FGhvlMUsVIBfCoU';

function stripTime(date: Date) {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

async function getGeocode(address: string) {
  const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: {
      address: address,
      key: GOOGLE_MAPS_API_KEY,
    },
  });
  const data = response.data;
  if (data.status === 'OK') {
    const location = data.results[0].geometry.location;
    return {
      lat: location.lat,
      lng: location.lng,
    };
  } else {
    return null;
  }
}

export async function getRecyclersAddressesWithMaterials(date: Date) {
  const strippedDate = stripTime(date);

  const recyclers = await prisma.recycler.findMany({
    where: {
      materials: {
        some: {
          date: {
            gte: strippedDate,
            lt: new Date(strippedDate.getTime() + 24 * 60 * 60 * 1000),
          },
        },
      },
    },
    select: {
      address: true,
    },
  });

  const geocodePromises = recyclers.map(async (recycler) => {
    if(recycler.address !== null) {
        const coordinates = await getGeocode(recycler.address);
        return {
          address: recycler.address,
          coordinates: coordinates,
        };
    }
  });

  const addressesWithCoordinates = await Promise.all(geocodePromises);
  
  return addressesWithCoordinates;
}
