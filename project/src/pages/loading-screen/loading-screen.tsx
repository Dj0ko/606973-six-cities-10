import './loading-screen.style.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  );
}

export default LoadingScreen;
