import React, { useState, useEffect, useCallback } from "react";
import { RegisterWrapper, LoginWrapper } from "./Style";
import { ButtonWrapper } from "../components/form/Style";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../components/form/Button";
import { views } from "../constants/views";
import { useSelector, useDispatch } from "react-redux";
import appActions from "../store/app/actions";
import { useTranslation } from "react-i18next";
import { Alert } from "reactstrap";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import registerFormModel from "../components/models/RegisterFormModel";
import UserForm from "../components/forms/UserForm";
import BioForm from "../components/forms/BioForm";
import formInitialValues from "../components/models/FormInitialValues";
import validationSchema from "../components/models/ValidationSchema";

const { registerRequest, setViewAction, clearStates } = appActions;

const steps = ["User data", "Bio data"];
const { formId, formField } = registerFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <UserForm formField={formField} />;
    case 1:
      return <BioForm formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const Register = ({ onClickSetView }) => {
  const dispatch = useDispatch();
  const appStore = useSelector((state) => state.app);

  const { t } = useTranslation();

  const [error, setError] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      console.log(values);
      onSubmit(values);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const onSubmit = useCallback(
    (values) => {
      dispatch(registerRequest(values));
    },
    [dispatch]
  );

  useEffect(() => {
    const { submitting, isRegistered, error } = appStore;
    //setIsSubmitting(submitting)
    if (isRegistered) {
      dispatch(setViewAction(views.LOGIN));
    }
    if (error && error.response) {
      setError(error.response.data);
    }
  }, [appStore, dispatch]);

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <LoginWrapper>
      <div className="login-container">
        <div className="fields">
          <div className="header">
            <h4>{t("User registration")}</h4>
            {error ? <Alert color="danger">{error}</Alert> : null}
          </div>
          <div className="form-wrapper">
            <Formik
              initialValues={formInitialValues}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  {_renderStepContent(activeStep)}
                  <div className="login-box mt-4">
                    <div className="px-2">
                      {activeStep !== 0 && (
                        <ButtonWrapper>
                          <button type="button" className="btn btn-primary">
                            <span className="login-link" onClick={_handleBack}>
                              {t("Back")}
                            </span>
                          </button>
                        </ButtonWrapper>
                      )}
                    </div>
                    <div className="px-2">
                      <Button
                        disabled={props.isSubmitting}
                        title={isLastStep ? t("Submit") : t("Next")}
                        type="submit"
                        loading={props.isSubmitting}
                      />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Register;
