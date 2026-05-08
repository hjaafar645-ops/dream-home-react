import "../Cards/cards.css"
function Cards({ properties }) {
  return (
    <div>
      <section className="proerties-section container-fluid">
        <div className="row">
          {properties.map((property) => (
            <div key={property.id} className="col-12 col-sm-8 col-md-5 col-lg-3 m-4">
              <div className="card d-flex flex-column h-100">
                <img src={property.img} alt={property.title} className="card-img-top img-fluid image-card"></img>
                <div className="card-body d-flex flex-column">
                  <h2 className="card-title"> <i className="fa fa-qout"></i> {property.title} </h2>
                  <h3 className="card-location"> Location : {property.location} </h3>
                  {property.salePrice && (
                    <h4 className="price-details"> For Sale : {property.salePrice} </h4>
                  )}
                  {property.rentPrice && (
                    <h4 className="price-details"> For Rent : {property.rentPrice} </h4>
                  )}
                  {property.mortgagePrice && (
                    <h4 className="price-details"> For Mortgage : {property.mortgagePrice} </h4>
                  )}
                  <p className="room-card"> <i className="fa fa-bed icon-card"></i> Bedrooms : {property.bedrooms} </p>
                  <p className="bath-card"> <i className="fa fa-bath icon-card"></i> Bathrooms : {property.bathroom} </p>
                  <p className="floor-card"> <i className="fa fa-building icon-card"></i> Floors : {property.floors} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Cards;