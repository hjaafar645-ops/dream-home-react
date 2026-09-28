import { useNavigate } from 'react-router-dom';
import { propertyContext } from "../../Pages/context/propertyContext";
import { useContext } from "react";
import './NotFound.css';

function NotFound() {

  const { scrollToTop } = useContext(propertyContext)

  const navigate = useNavigate();

  return (
    <main className="notfound-page">
      <div className="notfound-box">

        <div className="notfound-icon-pulse">
          <i className="bi bi-exclamation-triangle-fill"></i>
        </div>

        <h1 className="notfound-code-title">404</h1>
        <h2>Architectural Void</h2>

        <p className="notfound-paragraph">
          The elite residence or avenue you are seeking does not exist within our curated London portfolio.
          It may have been relocated or private access has expired.
        </p>

        <button
          className="notfound-return-btn"
          type="button"
          onClick={() => {
            scrollToTop();
            navigate('/');
          }}
        >
          <i className="bi bi-house-door-fill me-2"></i> Return To Home
        </button>

      </div>
    </main >
  );
}

export default NotFound;
