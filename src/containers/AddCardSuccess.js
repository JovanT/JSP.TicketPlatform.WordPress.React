import React from "react";
import { VerificationContainer, VerificationButtonLink } from "./Style";

const AddCardSuccess = () => {
  return (
    <VerificationContainer>
      <div className="login-container shadow-sm">
        <div className="successful">
          <h1 className="headertext">Card added successfully!</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="437"
            height="360"
            viewBox="0 0 437 360"
          >
            <g
              id="Group_607"
              data-name="Group 607"
              transform="translate(-1501 -611)"
            >
              <path
                id="Path_766"
                data-name="Path 766"
                d="M1723.382,930.389H1532.828A27.829,27.829,0,0,1,1505,902.56V642.828A27.829,27.829,0,0,1,1532.828,615h371.045a27.829,27.829,0,0,1,27.829,27.828V789.666"
                fill="none"
                stroke="#00c770"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="8"
              />
              <rect
                id="Rectangle_187"
                data-name="Rectangle 187"
                width="77"
                height="53"
                rx="5"
                transform="translate(1809 663)"
                fill="none"
                stroke="#00c770"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="8"
              />
              <line
                id="Line_47"
                data-name="Line 47"
                x2="148"
                transform="translate(1561 867)"
                fill="none"
                stroke="#00c770"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="8"
              />
              <line
                id="Line_48"
                data-name="Line 48"
                x2="92"
                transform="translate(1561 819)"
                fill="none"
                stroke="#00c770"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="8"
              />
              <ellipse
                id="Ellipse_151"
                data-name="Ellipse 151"
                cx="84.5"
                cy="84"
                rx="84.5"
                ry="84"
                transform="translate(1765 799)"
                fill="none"
                stroke="#00c770"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="8"
              />
              <path
                id="Path_767"
                data-name="Path 767"
                d="M1670,778.394l21.2,22.262L1744.21,745"
                transform="translate(141.112 111.179)"
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
            <button className="btn">To the profile</button>
          </a>
        </VerificationButtonLink>
      </div>
    </VerificationContainer>
  );
};

export default AddCardSuccess;
