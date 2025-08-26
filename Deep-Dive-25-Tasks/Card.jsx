import "./App.css";

function Card({ key, title, category, price, image }) {
  return (
    <div className="card" key={key}>
      <img src={image} alt={title} />
      <p className="category">{category}</p>
      <h3>{title}</h3>
      <p className="price">{price} $</p>
    </div>
  );
}

export default Card;


