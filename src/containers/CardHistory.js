import React, { useState, useEffect, useCallback } from "react";
import { views } from "../constants/views";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import appActions from "../store/app/actions";

const { logout, getUserCardsRequest, setUserCard, clearStates } = appActions;

const CardHistory = ({ onClickSetView }) => {
  const dispatch = useDispatch();
  const appStore = useSelector((state) => state.app);
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const { t } = useTranslation();

  const onLogoutClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const onClickCard = useCallback(
    (card) => {
      dispatch(setUserCard(card));
      onClickSetView(views.VIEW_CARD);
    },
    [dispatch, onClickSetView]
  );
  return (
    <div className="profile_page">
      <div className="profile-top">
        <div className="back" onClick={() => onClickSetView(views.PROFILE)}>
          <a>Card</a>
        </div>
        <div
          className="back"
          onClick={() => onClickSetView(views.VIEW_PROFILE)}
        >
          <a>View Profile</a>
        </div>
        <div className="back" onClick={() => onClickSetView(views.PROFILE)}>
          <a>Card History</a>
        </div>
        <div
          className="close-button"
          onClick={() => onClickSetView(views.PROFILE)}
        >
          <span className="logout" onClick={() => onLogoutClick()}>
            {t("Logout")}
          </span>
        </div>
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
