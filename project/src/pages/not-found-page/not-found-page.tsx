import { Link } from 'react-router-dom';
import { EAppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div style={{margin: '0 auto', width: '400px', textAlign: 'center'}}>
      <h1>404 Not Found</h1>
      <Link to={EAppRoute.Main}>Back to main-page</Link>
    </div>
  );
}

export default NotFoundPage;
