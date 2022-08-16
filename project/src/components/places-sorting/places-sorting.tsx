import { useState } from 'react';
import { tabs } from '../../const';

function PlacesSorting(): JSX.Element {
  const [ popular ] = tabs;
  const [ isOpened, setIsOpened ] = useState(false);
  const [ currentTab, setCurrentTab ] = useState(popular);

  const toggleSortingMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={toggleSortingMenu}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentTab.title}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {tabs.map((tab, index) => (
          <li
            key={tab.id}
            className={`places__option ${currentTab.id === index ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => setCurrentTab(tab)}
          >
            {tab.title}
          </li>)
        )}
      </ul>
    </form>
  );
}

export default PlacesSorting;
