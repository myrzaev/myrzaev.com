import styled from "styled-components";

export const StyledContactSection = styled.div`
  transition: 0.3s;

  .card-contact-wrapper {
    margin-top: 20px;
  }

  .card-contact {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #6f6f7b;
    font-family: "DM Sans", sans-serif;
    line-height: 1.6;
    cursor: pointer;

    & + & {
      margin-top: 16px;
    }

    svg {
      flex-shrink: 0;
      width: 30px;
      min-height: 34px;
      margin-right: 12px;
      transition: 0.3s;
      padding-right: 12px;
      border-right: 1px solid #dfe2ec;
    }
  }

  .card-social {
    display: flex;
    align-items: center;
    margin: 10px 0 20px 0;
    justify-content: flex-end;
    svg {
      fill: rgb(165, 181, 206);
      width: 16px;
      display: block;
      transition: 0.3s;
    }
    a {
      color: #8797a1;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      background-color: rgba(93, 133, 193, 0.05);
      border-radius: 50%;
      margin-right: 10px;

      &:hover {
        svg {
          fill: darken(rgb(165, 181, 206), 20%);
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .contact-me {
    text-transform: uppercase;
    border: 0;
    outline: none;
    background: linear-gradient(
      to right,
      rgba(83, 200, 239, 0.8) 0%,
      rgba(81, 106, 204, 0.8) 96%
    );
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    color: #fff;
    padding: 12px 16px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    font-family: "Jost", sans-serif;
    transition: 0.3s;
  }
`;
