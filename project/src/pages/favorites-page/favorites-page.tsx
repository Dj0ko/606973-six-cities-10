import AppHeader from '../../components/app-header/app-header';
// import PlaceCard from '../../components/place-card/place-card';

function FavoritesPage(): JSX.Element {
  return (
    <div className="page">
      <AppHeader />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {/* <ul className="favorites__list">
              {offers.map((offer) => {
                const {city: { name } } = offer;
                return (
                  <li className="favorites__locations-items" key={offer.id}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="todo">
                          <span>{name}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <PlaceCard offer={offer} className="favorites" />
                    </div>
                  </li>
                );
              })}
            </ul> */}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
