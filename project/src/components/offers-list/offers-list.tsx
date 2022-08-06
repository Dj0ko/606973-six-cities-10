import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types';

type OffersListProps = {
  offers: Offer[];
  onListItemHover?: (listItemName: string) => void;
}

function OffersList({ offers, onListItemHover }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} onListItemHover={onListItemHover} className="cities"/>)}
    </div>
  );
}

export default OffersList;
