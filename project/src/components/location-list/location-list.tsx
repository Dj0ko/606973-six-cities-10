import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { City } from '../../types';

type LocationsListProps = {
  locations: City[];
}

function LocationList({locations} : LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { city: { title } } = useAppSelector((state) => state);


  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location, index) => {
          const keyValue = `location-${index}`;
          return (
            <li className="locations__item" key={keyValue} onClick={() => dispatch(changeCity({ location }))}>
              <a className={`locations__item-link tabs__item ${title === location.title ? 'tabs__item--active' : ''}`} href="#">
                <span>{location.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default LocationList;
