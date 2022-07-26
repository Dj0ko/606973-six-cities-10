import PlaceCard from '../place-card/place-card';
import { TOffer } from '../../types/offer';

type TOffersListProps = {
  offers: TOffer[];
}

function OffersList({ offers }: TOffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} className="cities"/>)}
    </div>
  );
}

export default OffersList;
