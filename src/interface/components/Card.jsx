const Card = ({ title, image, description, price, func }) => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p><b>${price}</b></p>
          <button onClick={func} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default Card;
  