import React, { useState, useCallback } from "react";
import { ViewProductWrapper } from "./Style";
import { useSelector } from "react-redux";
import { views } from "../constants/views";
import moment from "moment";
import { Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import appActions from "../store/app/actions";
const { logout } = appActions;

const APP_HOST = process.env.REACT_APP_HOST;
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const STATUS_PATH = process.env.REACT_APP_PAYMENT_STATUS_PATH;
const FAILURE_QS = process.env.REACT_APP_PAYMENT_FAILURE_QS;
const SUCCESS_QS = process.env.REACT_APP_PAYMENT_SUCCESS_QS;

const ProductDetails = ({ onClickSetView }) => {
  const { t } = useTranslation();
  const appStore = useSelector((state) => state.app);
  const { product } = appStore;
  const [prng] = useState(
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  );
  const onClickMakePayment = (product) => {
    onClickSetView(views.VIEW_PAYMENT);
  };

  const dispatch = useDispatch();

  const onLogoutClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <ViewProductWrapper>
      <div className="profile-top">
        <div
          className="back"
          onClick={() => onClickSetView(views.VIEW_PRODUCTS)}
        >
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
      <div className="edit-header-box">
        <h4>{t("Selected Product")}</h4>
      </div>
      <div className="card-box shadow-sm">
        <div className="card-details">
          {/* <div className="labels">
            <p>{t("Product")}:</p>
            <p>{t("Valid")}:</p>
            <p>{t("Amount")}</p>
          </div> */}
          <div className="list-group ">
            <div className="list-group-item justify-content-between align-items-center">
              <div className="productName">
                {product && (
                  <p>{product.name ? product.name : t("Card Product")}</p>
                )}
                <p>{product ? product.name : t("Card Product")}</p>
              </div>
              <div>
                <p>
                  {moment(product.validFrom).format("DD/MM/YYYY")}
                  {" - "}
                  {moment(product.validTo).format("DD/MM/YYYY")}
                </p>
              </div>
              <div>
                <p className="amoun">
                  {product.amount} {product.currencyName}
                </p>
              </div>

              <div>
                <form action={`${API_ENDPOINT}/order`} method="post">
                  <input
                    type="hidden"
                    name="PaymentServiceType"
                    id="PaymentServiceType"
                    value="Asseco"
                  />
                  <input
                    type="hidden"
                    name="InstitutionId"
                    id="InstitutionId"
                    value="HalkBankMK"
                  />
                  <input
                    type="hidden"
                    name="TransactionType"
                    id="TransactionType"
                    value="1"
                  />
                  <input
                    type="hidden"
                    name="RequestId"
                    id="RequestId"
                    value={prng}
                  />
                  <input
                    type="hidden"
                    name="OkURL"
                    id="OkURL"
                    value={`${APP_HOST}${STATUS_PATH}${SUCCESS_QS}`}
                  />
                  <input
                    type="hidden"
                    name="FailURL"
                    id="FailURL"
                    value={`${APP_HOST}${STATUS_PATH}${FAILURE_QS}`}
                  />
                  <Input
                    type="hidden"
                    name="TransactionDescription"
                    id="TransactionDescription"
                    value={product ? product.name : "Card Product"}
                  />
                  <input
                    type="hidden"
                    name="Amount"
                    id="Amount"
                    value={product.amount}
                  />
                  <button
                    type="submit"
                    className="confirm-btn"
                    onClick={() => onClickMakePayment()}
                  >
                    {t("Confirm")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ViewProductWrapper>
  );
};

export default ProductDetails;
