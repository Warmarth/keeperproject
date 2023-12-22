import "../App.css";

const Card = (prop) => {
  return (
    <div className="term">
      <h1 className={``}>{prop.title}</h1>
      <dd className={``}>{prop.item}</dd>
      <dt className={``}>{prop.meaning}</dt>
    </div>
  );
};

// export { Card };
