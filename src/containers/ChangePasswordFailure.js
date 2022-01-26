import React from "react";
import { views } from "../constants/views";
import appActions from "../store/app/actions";
import { useDispatch } from "react-redux";
import { VerificationContainer, VerificationButtonLink } from "./Style";

const { clearStates } = appActions;

const ChangePasswordFailure = ({ onClickSetView }) => {
  const dispatch = useDispatch();

  return (
    <VerificationContainer>
      <div className="login-container shadow-sm">
        <div className="unsuccessful">
          <h1 className="headertext"> Error, please try again</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="246"
            height="360"
            viewBox="0 0 246 360"
          >
            <g id="padloock" transform="translate(-300.037 -211.945)">
              <path
                id="Path_824"
                data-name="Path 824"
                d="M310,329.915v-28.96a85.26,85.26,0,0,1,85.01-85.01h0a85.26,85.26,0,0,1,85.01,85.01"
                transform="translate(28.012 0)"
                fill="none"
                stroke="#d80c0c"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              />
              <path
                id="Rectangle_211"
                data-name="Rectangle 211"
                d="M0,0H238a0,0,0,0,1,0,0V217a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V0A0,0,0,0,1,0,0Z"
                transform="translate(304.037 346.945)"
                fill="none"
                stroke="#d80c0c"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              />
              <line
                id="Line_54"
                data-name="Line 54"
                x2="55"
                y2="55"
                transform="translate(395.537 429.945)"
                fill="none"
                stroke="#d80c0c"
                stroke-linecap="round"
                stroke-width="8"
              />
              <line
                id="Line_55"
                data-name="Line 55"
                x1="55"
                y2="55"
                transform="translate(395.537 429.945)"
                fill="none"
                stroke="#d80c0c"
                stroke-linecap="round"
                stroke-width="8"
              />
            </g>
          </svg>
        </div>
        <br />
        <br />

        <VerificationButtonLink>
          <a href="#jsp">
            <button className="btn">To the profile</button>
          </a>
        </VerificationButtonLink>
      </div>
    </VerificationContainer>
  );
};

export default ChangePasswordFailure;
