import { Offer } from '../types';
import { offers } from '../mocks';

export const getOfferList = (city: string): Offer[] => offers.filter((offer) => offer.city.name === city);
