import React, { useState, useEffect, useCallback } from "react";
import { views } from "../constants/views";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import appActions from "../store/app/actions";
import { Label } from "reactstrap";
import { ProfileWrapper } from "./Style";
import ChangePasswordSuccess from "./ChangePasswordSuccess";
import ChangePasswordFailure from "./ChangePasswordFailure";

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
    <ProfileWrapper>
      <div className="profile_page">
        <div className="profile-top">
          <div className="back" onClick={() => onClickSetView(views.PROFILE)}>
            <a>Card</a>
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
            <div>
              <Label>
                <b>Date from</b>
              </Label>
              <br />
              <input type="date" placeholder="Date from" />
            </div>
            <div>
              <Label>
                <b>Date to</b>
              </Label>
              <br />
              <input type="date" placeholder="Date to" />
            </div>
          </div>
          <select className="cardhistoryselect">
            <option>select a card </option>
          </select>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default CardHistory;
