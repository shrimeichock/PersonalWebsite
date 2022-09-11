function Card(props) {
    // condition ? expressionTrue : expressionFalse
    // if (condition1 && condition2)
  return (
    <div className="card cyan">
      <h2>{props.jobTitle}</h2>
      { !props.isActive && <h3>PAST POSITION</h3>}
      <p>
        <strong>{props.companyName}</strong>
      </p>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
