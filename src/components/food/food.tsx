import { useState } from "react";

function Food(attrs: {
  name: string;
  image: any;
  description: string;
  count: number;
  price: number;
}) {
  const [foodCount, setFoodCount] = useState(attrs.count);
  let foodAvailabilityClass = "available";

  if (attrs.count == 0) {
    foodAvailabilityClass = "unavailable";
  }

  const decCount = () => {
    if (foodCount > 0) {
      setFoodCount(foodCount - 1);
    }
    console.log(foodCount);
  };

  return (
    <article
      onClick={decCount}
      className={"menu-item " + foodAvailabilityClass}
    >
      <img src={attrs.image} alt="" />
      <div className="food-info">
        <h3>{attrs.name}</h3>
        <p>{attrs.description}</p>
      </div>
      {foodCount > 0 && <span>{foodCount}</span>}
      {foodCount < 0 && <span>&infin;</span>}
      <div className="food-price">{attrs.price}</div>
    </article>
  );
}

export default Food;
