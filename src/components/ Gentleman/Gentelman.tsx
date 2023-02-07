import { FC } from "react";
import { Gentleman } from "./gentelman.model";


interface CardProps {
  gentleman: Gentleman;
}

const Card: FC<CardProps> = ({ gentleman }) => {
  return (
   
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${gentleman.picture}`}
          alt={gentleman.alternativeText}
        />
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{gentleman.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {gentleman.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> 
            {gentleman.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> 
            {gentleman.twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Card;