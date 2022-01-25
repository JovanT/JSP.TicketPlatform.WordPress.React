import React from 'react';
import { views } from '../constants/views'
import appActions from '../store/app/actions'
import { useDispatch } from 'react-redux'
import { VerificationContainer, VerificationButtonLink } from './Style';

const { clearStates } = appActions

const RegisterFailure = ({ onClickSetView }) => {
  const dispatch = useDispatch()

  return (
    <VerificationContainer>
      <div className="login-container shadow-sm">
        <h2>Your sign up was un-successful</h2>
        <p>
          We have sent a verification email to the email address you provided
          during the sign up. Kindly check your email and click on the link
          there to verify your account.
        </p>
        <VerificationButtonLink>
          <a href="#jsp">
            <button className="btn" onClick={() => {
              dispatch(clearStates())
              onClickSetView(views.REGISTER)
              }}> Proceed to Register</button>
          </a>
        </VerificationButtonLink>
      </div>
    </VerificationContainer>
  );
};

export default RegisterFailure;
