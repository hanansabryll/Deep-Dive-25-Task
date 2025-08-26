
import Card from "./card.jsx";
import { Products } from "./data.js";

export default function ProductCards() {
  const elm = Products.map((product) => {
    return  <Card
        key={product.id}
        title={product.title}
        category={product.category}
        price={product.price}
        image={product.image}
      />
    // );
  });
return <div className="card-container">{elm}</div>;
}