import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ViewProductWrapper } from "./Style";
import { views } from "../constants/views";
import appActions from "../store/app/actions";
import { isEmpty } from "../helper/isEmpty";
import { Spinner } from "reactstrap";
import moment from "moment";
import { useTranslation } from "react-i18next";

const { getProductsRequest, setUserProduct } = appActions;

const ViewProducts = ({ onClickSetView }) => {
  const dispatch = useDispatch();
  const appStore = useSelector((state) => state.app);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();

  const { logout } = appActions;

  const onClickProduct = useCallback(
    (product) => {
      dispatch(setUserProduct(product));
      onClickSetView(views.PRODUCT_DETAILS);
    },
    [dispatch, onClickSetView]
  );

  useEffect(() => {
    const { user, card } = appStore;
    dispatch(getProductsRequest({ userId: user.id, cuId: card.cuid }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { user, products, loading } = appStore;
    setUser(user);
    setLoading(loading);
    setProducts(products);
    // if (!user && !isProducts && !card) {
    //   dispatch(getProductsRequest({ userId: user.id, cuId: card.cuid }))
    // }
  }, [appStore, dispatch]);

  const onLogoutClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <ViewProductWrapper>
    
      <div className="profile-top">
        <div className="back" onClick={() => onClickSetView(views.PROFILE)}>
          <a href="#">Back</a>
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
        <h4>{t("Top Up")}</h4>
      </div>
      <div className="card-box shadow-sm rounded">
        <div>{t("Current card status")}</div>
      </div>
      <div className="card-box shadow-sm rounded-3">
        <div className="header-box">
          <h4>{t("Available Product")}</h4>
        </div>
        <div className="card-details">
          <div className="list-group list-group-numbered">
            {loading && isEmpty(products) ? (
              <Spinner />
            ) : (
              products.map((product) => (
                <div
                  className="list-group-item justify-content-between align-items-center"
                  key={product.id}
                >
                  <div className="productName" tooltip={product?.zoneName}>
                    {product.productName
                      ? product.productName
                      : t("Card Product")}
                  </div>
                  <div className="validDate">
                    {moment(product.validFrom).format("DD/MM/YYYY")}
                    {" - "}
                    {moment(product.validTo).format("DD/MM/YYYY")}
                  </div>
                  <div className="amoun">
                    {product.amount} {product.currencyName}
                  </div>
                  <div
                    className="purchaseBtn"
                    onClick={() => onClickProduct(product)}
                  >
                    {t("Purchase")}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </ViewProductWrapper>
  );
};

export default ViewProducts;
