import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types';

type OffersListProps = {
  offers: Offers;
  onListItemHover?: (listItemName: string) => void;
}

function OffersList({ offers, onListItemHover }: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} onListItemHover={onListItemHover} className="cities"/>)}
    </>
  );
}

export default OffersList;
