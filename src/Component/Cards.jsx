import React from "react";

function Cards(props) {

  return (
    <>
      <div className="col-xl-3 col-md-4 col-sm-6 m-1 p-0 cardcls">
        <img src={props.image} alt={props.alt} />
        <h5 className="text-warning">{props.name}</h5>
      </div>
    </>
  );
}

export default Cards;