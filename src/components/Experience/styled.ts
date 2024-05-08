import styled from "styled-components";

export const StyledCardSection = styled.div`
    position: relative;

    &:after {
      background: linear-gradient(
        to top,
        rgba(134, 214, 243, 0) 0%,
        rgba(81, 106, 204, 1) 100%
      );
      content: "";
      left: 25px;
      width: 2px;
      top: 52px;
      height: 85%;
      position: absolute;
    }

  .card-timeline {
    margin-top: 15px;
    position: relative;
    overflow: auto;
    height: 350px;
  }

  .card-item {
    position: relative;
    margin-left: 20px;
    padding-left: 15px;
    padding-bottom: 18px;
    z-index: 1;

    &:last-child {
      padding-bottom: 5px;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: -20px;
      width: 8px;
      height: 8px;
      line-height: 0.6;
      border: 2px solid #fff;
      font-size: 11px;
      text-indent: -35px;
      border-radius: 50%;
      background: linear-gradient(
        to right,
        rgba(134, 214, 243, 0) 0%,
        rgba(81, 106, 204, 1) 5%
      );
    }

    &-title,
    &-period {
      font-weight: 500;
      font-size: 14px;
      margin: 0 0 5px 0;

      a {
        text-decoration: none;
        border-bottom: 1px solid;
        color: inherit;
      }
    }

    &-period {
      font-weight: 400;
      font-size: 12px;
      margin-bottom: 10px;
    }

    &-desc {
      font-size: 13px;
      color: #6f6f7b;
      line-height: 1.5;
      font-family: "DM Sans", sans-serif;

      p {
        position: relative;
        margin: 0;

        &:before {
          content: "▹";
          position: absolute;
          left: -14px;
          line-height: 16px;
          background: linear-gradient(
            to right,
            rgba(83, 200, 239, 0.8) 0%,
            rgba(81, 106, 204, 0.8) 96%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
`;
