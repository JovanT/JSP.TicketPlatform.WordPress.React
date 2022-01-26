import React from "react";
import { VerificationContainer, VerificationButtonLink } from "./Style";

const ChangePasswordSuccess = () => {
  return (
    <VerificationContainer>
      <div className="login-container shadow-sm">
        <div className="successful">
          <h1 className="headertext">
            {" "}
            The password was successfully changed!
          </h1>
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
                stroke="#00c770"
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
                stroke="#00c770"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              />
              <path
                id="Path_767"
                data-name="Path 767"
                d="M1670,778.394l21.2,22.262L1744.21,745"
                transform="translate(-1284.068 -315.383)"
                fill="none"
                stroke="#00c770"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              />
            </g>
          </svg>

          <br />
          <br />
        </div>
        <VerificationButtonLink>
          <a href="#jsp">
            <button className="btn"> To the Profile</button>
          </a>
        </VerificationButtonLink>
      </div>
    </VerificationContainer>
  );
};

export default ChangePasswordSuccess;
