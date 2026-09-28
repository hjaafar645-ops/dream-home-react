import './Loading.css';

function Loading() {
  return (
    <div className="prop-loading-gate">
      <div className="prop-loading">
        
        <div className="prop-spinner">
          <i className="bi bi-house-gear-fill"></i>
        </div>
        
        <h2 className="prop-loading-title"> AuraHomes Portfolio </h2>
        <p className="prop-loading-subtitle"> Curating premium London avenues... </p>
        
        <div className="prop-progress-bar">
          <div className="prop-progress-bar-fill"></div>
        </div>

      </div>
    </div>
  );
}

export default Loading;
