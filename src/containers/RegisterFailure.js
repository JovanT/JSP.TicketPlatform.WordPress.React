import React from "react";
import { views } from "../constants/views";
import appActions from "../store/app/actions";
import { useDispatch } from "react-redux";
import { VerificationContainer, VerificationButtonLink } from "./Style";

const { clearStates } = appActions;

const RegisterFailure = ({ onClickSetView }) => {
  const dispatch = useDispatch();

  return (
    <VerificationContainer>
      <div className="login-container shadow-sm">
        <div className="unsuccessful">
          <h1 className="headertext"> Unsuccessful registration!</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="304"
            height="360"
            viewBox="0 0 304 360"
          >
            <g
              id="Group_628"
              data-name="Group 628"
              transform="translate(-1060 -1909)"
            >
              <path
                id="Path_791"
                data-name="Path 791"
                d="M1168,2193c18.646,0,32-13.066,32-32v-16c0-18.934-13.354-32-32-32s-32,13.066-32,32v16C1136,2179.934,1149.355,2193,1168,2193Z"
                fill="none"
                stroke="#d80c0c"
                strokeLinejoin="round"
                strokeWidth="8"
              />
              <path
                id="Path_792"
                data-name="Path 792"
                d="M1240,2265v-32c0-26.427-46.989-40-72-40s-72,13.573-72,40v32"
                fill="none"
                stroke="#d80c0c"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
              <path
                id="Rectangle"
                d="M1104,2137h-16a24,24,0,0,1-24-24V1937a24,24,0,0,1,24-24h248a24,24,0,0,1,24,24v176a24,24,0,0,1-24,24h-24l-41.685,53.595a8,8,0,0,1-14.315-4.911V2137h-24"
                fill="none"
                stroke="#d80c0c"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
              <g
                id="Union_1"
                data-name="Union 1"
                transform="translate(-4090.275 -9291.275)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M5306.276,11341.268l-28.284,28.284L5249,11340.559l28.285-28.283L5249,11283.99l28.993-28.99,28.284,28.284,28.285-28.284,28.99,28.99-28.284,28.285,28.284,28.283-28.99,28.993Z"
                  stroke="none"
                />
                <path
                  d="M 5277.9921875 11358.23828125 L 5300.619140625 11335.6103515625 C 5302.119140625 11334.1103515625 5304.154296875 11333.267578125 5306.27587890625 11333.267578125 C 5308.3974609375 11333.267578125 5310.4326171875 11334.1103515625 5311.9326171875 11335.6103515625 L 5334.56005859375 11358.23828125 L 5352.2373046875 11340.55859375 L 5329.6103515625 11317.9326171875 C 5326.486328125 11314.80859375 5326.48583984375 11309.7431640625 5329.60986328125 11306.619140625 L 5352.2373046875 11283.990234375 L 5334.560546875 11266.3134765625 L 5311.9326171875 11288.94140625 C 5310.4326171875 11290.44140625 5308.3974609375 11291.2841796875 5306.27587890625 11291.2841796875 C 5304.154296875 11291.2841796875 5302.119140625 11290.44140625 5300.619140625 11288.94140625 L 5277.99169921875 11266.3134765625 L 5260.31298828125 11283.990234375 L 5282.9404296875 11306.6181640625 C 5284.44091796875 11308.119140625 5285.28369140625 11310.1533203125 5285.28369140625 11312.275390625 C 5285.28369140625 11314.3974609375 5284.44091796875 11316.431640625 5282.9404296875 11317.9326171875 L 5260.31298828125 11340.55859375 L 5277.9921875 11358.23828125 M 5334.560546875 11369.5517578125 L 5306.27587890625 11341.267578125 L 5277.9921875 11369.5517578125 L 5248.9990234375 11340.55859375 L 5277.28369140625 11312.275390625 L 5248.9990234375 11283.990234375 L 5277.9921875 11255 L 5306.27587890625 11283.2841796875 L 5334.560546875 11255 L 5363.55078125 11283.990234375 L 5335.26708984375 11312.275390625 L 5363.55078125 11340.55859375 L 5334.560546875 11369.5517578125 Z"
                  stroke="none"
                  fill="#d80c0c"
                />
              </g>
            </g>
          </svg>
        </div>
        <br />
        <br />

        <VerificationButtonLink>
          <a href="#jsp">
            <button
              className="btn"
              onClick={() => {
                dispatch(clearStates());
                onClickSetView(views.REGISTER);
              }}
            >
              Try again
            </button>
          </a>
        </VerificationButtonLink>
      </div>
    </VerificationContainer>
  );
};

export default RegisterFailure;
