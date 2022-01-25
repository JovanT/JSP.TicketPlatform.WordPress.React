import React from "react";
import { ViewCardWrapper } from "./Style";
import { views } from "../constants/views";
import { useSelector } from "react-redux";
import { CreditCard } from "react-feather";
import { useTranslation } from "react-i18next";
import profileImage from "../img/profileImage.png";

const ViewCard = ({ onClickSetView }) => {
  const { t } = useTranslation();
  const appStore = useSelector((state) => state.app);
  const { card } = appStore;

  return (
    <ViewCardWrapper>
      <div className="card-box">
        <div className="header-box">
          <h4>{card ? card.name : ""}</h4>
          <div
            className="close-button"
            onClick={() => onClickSetView(views.PROFILE)}
          >
            <i className="fa fa-close"></i>
          </div>
        </div>
        <div className="viewcard">
          <div className="card-footer-alt">
            <img className="profile-image" width="450px" src={profileImage} />
          </div>
          <div className="details">
            <div className="topID">
              <h4>{card ? card.name : ""}</h4>
              <p>{card ? card.cuid : ""}</p>
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
          <h3>Active Service</h3>
          <div>
            <button> Monthly ticket </button>
          </div>
        </div>
      </div>
    </ViewCardWrapper>
  );
};

export default ViewCard;
