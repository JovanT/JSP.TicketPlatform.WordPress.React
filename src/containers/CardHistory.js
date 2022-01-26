import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


const CardHistory = () => {
  return (
    <div className="profile_page">
      <div className="profile_nav">
        <ul>
          <li>
            <a href="#">Cards</a>
          </li>
          <li>
            <a href="#">Cards History</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} className="logout" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
      <div className="cardhistory">
        <div className="history">
          <input type="date" placeholder="Date from" />
          <input type="date" placeholder="Date to" />{" "}
        </div>
        <select className="cardhistoryselect">
          <option>select a card </option>
        </select>
      </div>
    </div>
  );
};

export default CardHistory;
