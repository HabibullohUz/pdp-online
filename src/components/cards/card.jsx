const Card = ({ setData }) => {
  const { title, Price, usersCount, gb, support, btnName } = setData;
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-top">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="cards-info">
          <p className="card-text text-center bg-white">
            {Price} <span> / month</span>
          </p>
          <p className="card-info text-center bg-white">
            <p>{usersCount} users included</p>
            <p>{gb} GB of storage</p>
            <p>{support}email support</p>
            <p>Help center access</p>
          </p>
          <a
            href="#2"
            className={`btn btn-${
              title === "Free" ? "outline-primary" : "primary"
            }`}
          >
            {btnName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
