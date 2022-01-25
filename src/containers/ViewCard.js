import React, { useCallback } from "react";
import { ViewCardWrapper } from "./Style";
import { views } from "../constants/views";
import { useSelector } from "react-redux";
import { CreditCard } from "react-feather";
import { useTranslation } from "react-i18next";
import profileImage from "../img/profileImage.png";
import { useDispatch } from "react-redux";
import appActions from "../store/app/actions";

const ViewCard = ({ onClickSetView }) => {
  const { t } = useTranslation();
  const appStore = useSelector((state) => state.app);
  const { card } = appStore;
  const dispatch = useDispatch();
  const { logout } = appActions;

  const onLogoutClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <ViewCardWrapper>
      <div className="profile-top">
        <div className="back" onClick={() => onClickSetView(views.PROFILE)}>
          <a>Back</a>
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
      <div className="card-box">
        <div className="viewcard">
          <div className="card-footer-alt">
            <img className="profile-image" width="450px" src={profileImage} />
          </div>
          <div className="details">
            <div className="topID">
              <h4>{t("Personalized")}</h4> <p>{card ? card.cuid : ""}</p>
            </div>
            <div className="view-card-button">
              <button onClick={() => onClickSetView(views.VIEW_PRODUCTS)}>
                {t("Top Up")}
              </button>
              <button>{t("Remove")}</button>
            </div>
          </div>
        </div>
        <div className="active-service">
          <h6>Active Service</h6>
          <div className="active-service-button">
            <button> Monthly ticket </button>
            <p>This monthly ticket is from 01.12.2021 to 31.12.2021</p>
          </div>
        </div>
      </div>
    </ViewCardWrapper>
  );
};

export default ViewCard;
