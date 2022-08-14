type LocationsListProps = {
  locations: string[];
}

function LocationList({locations} : LocationsListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location, index) => {
          const keyValue = `location-${index}`;
          return (
            <li className="locations__item" key={keyValue}>
              <a className="locations__item-link tabs__item" href="#">
                <span>{location}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default LocationList;
