import React, { useState, useEffect, useCallback } from "react";
import { LoginWrapper } from "./Style";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../components/form/TextInput";
// import Checkbox from '../components/form/Checkbox'
import Button from "../components/form/Button";
import { views } from "../constants/views";
import { useSelector, useDispatch } from "react-redux";
import appActions from "../store/app/actions";
import { Alert } from "reactstrap";
import { useTranslation } from "react-i18next";
import { LabelWrapper, ButtonInverseWrapper } from "../components/form/Style";

const { loginRequest, clearStates, setViewAction } = appActions;

const Login = ({ onClickSetView }) => {
  const appStore = useSelector((state) => state.app);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
    // rememberMe: ''
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const onSubmit = useCallback(
    (values) => {
      dispatch(loginRequest(values));
    },
    [dispatch]
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("Enter a valid email"))
      .required(t("Email is required")),
    password: Yup.string().required(t("Password is required")),
  });

  useEffect(() => {
    const t = new URL(window.location.href).searchParams.get("t");
    const page = new URL(window.location.href).searchParams.get("page");
    dispatch(clearStates());
    // Clear query strings
    if (t || page) {
      window.location.search = "";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { submitting, isAuthenticated, token, error } = appStore;
    setIsSubmitting(submitting);
    if (error && error.response) {
      setError(error.response.data);
    }
    if (isAuthenticated && token) {
      dispatch(setViewAction(views.PROFILE));
    }
  }, [appStore, dispatch]);

  return (
    <LoginWrapper>
      <div className="login-container">
        <div className="fields">
          <div className="header">
            <h4>{t("Log in")}</h4>
            {error ? (
              <Alert color="danger">{JSON.stringify(error)}</Alert>
            ) : null}
          </div>
          <div className="form-wrapper">
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => onSubmit(values)}
              validationSchema={validationSchema}
            >
              {({
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <LabelWrapper>
                      <p>{t("E-mail")}</p>
                    </LabelWrapper>
                    <TextInput
                      type="email"
                      placeholder={t("Enter your e-mail")}
                      name="email"
                      value={values.email}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      error={
                        errors.email && touched.email ? errors.email : null
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <LabelWrapper>
                      <p>{t("Password")}</p>
                    </LabelWrapper>
                    <TextInput
                      type="password"
                      placeholder={t("Enter your password")}
                      name="password"
                      value={values.password}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      error={
                        errors.password && touched.password
                          ? errors.password
                          : null
                      }
                    />
                  </div>
                  {/* <div className="mb-3 form-check">
                    <Checkbox
                      value={values.terms}
                      name="terms"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      error={
                        errors.terms && touched.terms ? errors.terms : null
                      }
                    >
                      {t('Remember me')}
                    </Checkbox>
                    
                  </div> */}
                  <div className="login-box mt-4">
                    <div className="px-2">
                      <Button
                        title={t("Log in")}
                        type="submit"
                        loading={isSubmitting}
                      />
                    </div>
                    <div className="px-2">
                      <ButtonInverseWrapper>
                        <button type="button" className="btn btn-primary">
                          <span
                            className="login-link"
                            onClick={() => onClickSetView(views.REGISTER)}
                          >
                            {t("Register")}
                          </span>
                        </button>
                      </ButtonInverseWrapper>
                    </div>
                    <div className="px-2">
                      <p>
                        <span
                          className="login-link"
                          onClick={() => onClickSetView(views.FORGOT_PASSWORD)}
                        >
                          {t("Forgotten password?")}
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
