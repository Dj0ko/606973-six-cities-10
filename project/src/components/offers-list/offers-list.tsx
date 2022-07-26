import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} className="cities"/>)}
    </div>
  );
}

export default OffersList;
