import styled from "styled-components";

export const StyledProjectsSection = styled.div`
  padding: 20px 0;

  .projects-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;

    h1 {
      margin: 0;
      padding: 0;
    }
  }

  .swiper-slide {
    width: 85% !important;
  }

  .swiper-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .card-subtitle {
    padding: 0 20px;
  }

  .project {
    position: relative;
    border: 1px solid gray;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 8px;
    height: 100%;

    &-title {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 5px;
      margin-top: 0;

      a {
        text-decoration: none;
        color: inherit;
        padding-left: 14px;
        position: relative;
        border-bottom: 1px solid;

        &:before {
          position: absolute;
          content: "";
          width: 11px;
          height: 11px;
          top: 2px;
          left: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z'/%3E%3Cpath fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'/%3E%3C/svg%3E");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          display: inline-block;
        }
      }
    }

    &-desc,
    &-stack {
      margin: 0;
      font-size: 13px;
      color: #6f6f7b;
      line-height: 1.5;
      font-family: "DM Sans", sans-serif;
    }

    &-stack {
      padding: 0;
      margin-top: 8px;
      display: flex;
      flex-wrap: wrap;

      li {
        list-style: none;
        position: relative;
        padding-left: 10px;

        &:not(:last-of-type) {
          margin-right: 10px;
        }

        &:before {
          content: "▹";
          position: absolute;
          left: 0;
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

  .project-count {
    padding: 0 20px;
    margin: 0;
    font-size: 13px;
    color: #6f6f7b;
    line-height: 1.5;
    font-family: "DM Sans", sans-serif;
    text-align: right;
  }
`;
