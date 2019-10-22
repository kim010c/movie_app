import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "haryy",
    image:
      "https://postfiles.pstatic.net/20151001_268/iezynvjwr_1443688686125tVhdb_JPEG/%C7%D8%B8%AE%C6%F7%C5%CD1.jpg?type=w3",
    rating: 2.2 / 5
  },
  {
    id: 2,
    name: "ron",
    image:
      "https://postfiles.pstatic.net/20151001_268/iezynvjwr_1443688686125tVhdb_JPEG/%C7%D8%B8%AE%C6%F7%C5%CD1.jpg?type=w3",
    rating: 5 / 5
  }
];
function Movie({ name, picture, rating }) {
  return (
    <div>
      <h1>I hate {name}</h1>;
      <img src={picture} alt={name} />
      <h4>{rating}</h4>
    </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Movie
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
