import { Offers } from '../types';
import { offers } from '../mocks';

export const getOfferList = (city: string): Offers => offers.filter((offer) => offer.city.name === city);
