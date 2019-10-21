import React from 'react';

function Movie({fav}){
  return <h1>I hate {fav}</h1>;
}

function App() {
  return (
    <div>
      하이
      <Movie fav="kimchi" />
      <Movie fav="Pizza" />
      <Movie fav="potato" />
      <Movie fav="kim" />
    </div>
  );
}

export default App;
