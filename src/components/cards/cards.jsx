import Card from "./card";

const Cards = ({ setDatas }) => {
  return (
    <div className="container cards-container">
      {setDatas.map((setData) => (
        <Card setData={setData} />
      ))}
    </div>
  );
};

export default Cards;
