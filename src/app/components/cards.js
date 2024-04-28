
import React from 'react';
import ReactDOM from 'react-dom';



const Cards = ({ title, description, imageUrl }) => {
  return (
    <div >
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};



const cardData = [
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "/images/card1.jpg"
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "/images/card2.jpg"
    },
    {
      title: "Card 3",
      description: "Description for Card 3",
      imageUrl: "/images/card3.jpg"
    }
  ];
  
  const App = () => {
    return (
      <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-4" key={index}>
              <Cards
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default App;
