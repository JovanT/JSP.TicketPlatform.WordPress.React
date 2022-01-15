import styled from 'styled-components'

const TextInputWrapper = styled.div`
  .form-control {
    padding: 0rem 0rem 0.3rem 0rem;
    background: linear-gradient(#D80C0C, #D80C0C), linear-gradient(#D80C0C, #D80C0C), linear-gradient(#D80C0C, #D80C0C);
    background-size: 0px 20%, 100% 2px, 2px 20%;
    background-position: bottom left, bottom center, bottom right;
    background-repeat: no-repeat;
    border: none;
    border-radius: 0px;
    width: 100%;

    &:after {
      font-size: 0.95rem;
      color: #fff;
      font-weight: 300;
    }

    &::placeholder {
      font-size: 0.95rem;
      color: #888;
      font-weight: 300;
    }
  }
  p {
    color: #747474;
    font-size: 1rem;
  }
`
const LabelWrapper = styled.div`
  p {
    color: #000000;
    font: normal normal bold 1rem Open Sans;
  }
`

const CheckboxWrapper = styled.div`
  .form-check-input {
    border-radius: 3px;

    &:checked {
      background-color: #a20c25;
      border-color: #a20c25;
    }
  }

  .form-check-label {
    font-weight: 700;
    font-size: 0.85rem;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #a20c25;
    }
  }

  p {
    color: #ff0000;
    font-size: 0.8rem;
  }
`

const ButtonWrapper = styled.div`
  .btn {
    border: 1px solid #D80C0C;
    background-color: #D80C0C;
    color: #fff;
    border-radius: 13px;
    padding: 0.3rem 1rem 0.3rem 1rem;
    font: normal normal bold 1rem Open Sans;
    width: 100%;
  }
`

const ButtonInverseWrapper = styled.div`
  .btn {
    border: 2px solid #D80C0C;
    background-color: #FFFFFF;
    color: #D80C0C;
    border-radius: 13px;
    padding: 0.3rem 1rem 0.3rem 1rem;
    font: normal normal bold 1rem Open Sans;
    width: 100%;
  }
`

const SelectWrapper = styled.div`
  .form-control {
    border-radius: 3px;
    border: 1px solid #e0e0e0 !important;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    color: #222 !important;
    font-weight: 400;

    .title {
      font-size: 0.95rem;
      color: #888;
      font-weight: 300;
    }
  }
  p {
    color: #ff0000;
    font-size: 0.8rem;
  }
`

export { LabelWrapper, TextInputWrapper, CheckboxWrapper, ButtonWrapper, ButtonInverseWrapper, SelectWrapper }
