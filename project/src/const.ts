import { City, Tab } from './types';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const LOCATIONS: City[] = [
  {
    id: 1,
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13
  },
  {
    id: 2,
    title: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 13
  },
  {
    id: 3,
    title: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
    zoom: 13
  },
  {
    id: 4,
    title: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
    zoom: 13
  },
  {
    id: 5,
    title: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 13
  },
  {
    id: 6,
    title: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
    zoom: 13
  }];

export enum Tabs {
  Popular = 0,
  PriceLowToHigh = 1,
  PriceHighToLow = 2,
  TopRatedFirst = 3
}

export const tabs: Tab[] = [
  {
    title: 'Popular',
    id: Tabs.Popular
  },
  {
    title: 'Price: low to high',
    id: Tabs.PriceLowToHigh
  },
  {
    title: 'Price: high to low',
    id: Tabs.PriceHighToLow
  },
  {
    title: 'Top rated first',
    id: Tabs.TopRatedFirst
  }
];

