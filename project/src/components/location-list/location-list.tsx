import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { LOCATIONS } from '../../const';

function LocationList(): JSX.Element {
  const dispatch = useAppDispatch();
  const { city: { id } } = useAppSelector((state) => state);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {LOCATIONS.map((location, index) => {
          const keyValue = `location-${index}`;
          return (
            <li className="locations__item" key={keyValue} onClick={() => dispatch(changeCity({ location }))}>
              <a className={`locations__item-link tabs__item ${id === location.id ? 'tabs__item--active' : ''}`} href="#">
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
