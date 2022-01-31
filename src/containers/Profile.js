import React, { useState, useEffect, useCallback } from "react";
import { ProfileWrapper } from "./Style";
import { useSelector, useDispatch } from "react-redux";
import userProfile from "../img/user.svg";
import { views } from "../constants/views";
import appActions from "../store/app/actions";
import { CreditCard } from "react-feather";
import { useTranslation } from "react-i18next";
import "react-perfect-scrollbar/dist/css/styles.css";
import profileImage from "../img/profileImage.png";

const { logout, getUserCardsRequest, setUserCard, clearStates } = appActions;

const Profile = ({ onClickSetView }) => {
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

  useEffect(() => {
    const { user } = appStore;
    dispatch(getUserCardsRequest(user.id));
    clearStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { user, cards } = appStore;
    setUser(user);
    setCards(cards);
  }, [appStore, dispatch]);

  return (
    <ProfileWrapper>
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
        <div className="back" onClick={() => onClickSetView(views.CARDHISTORY)}>
          <a>Card History</a>
        </div>
        <div className="close-button">
          <span className="logout" onClick={() => onLogoutClick()}>
            {t("Logout")}
          </span>
        </div>
      </div>
      <div className="profile-box">
        {cards.length > 0
          ? cards.map((card) => (
              <div className="card-box" key={card.id}>
                <div className="add-card">
                  <img
                    className="profile-image"
                    src={profileImage}
                    onClick={() => onClickCard(card)}
                  />
                  <button onClick={() => onClickCard(card)}>Top Up</button>
                </div>
              </div>
            ))
          : null}
        <div className="card-box">
          <div
            className="add-card plus"
            onClick={() => onClickSetView(views.ADD_CARD)}
          >
            <div className="inner-card">
              <div className="icon">
                <i className="fa fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
