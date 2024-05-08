import styled from "styled-components";

export const StyledHeaderComponent = styled.header`
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;

  * {
    transition: 0.3s;
  }

  &.is-active {
    height: 80px;

    .card-cover {
      height: 100px;
      top: -50px;
    }

    .card-avatar {
      transform: none;
      left: 20px;
      width: 50px;
      height: 50px;
      bottom: 10px;
    }

    .card-fullname,
    .card-jobtitle {
      left: 86px;
      transform: none;
    }

    .card-fullname {
      bottom: 18px;
      font-size: 19px;
    }

    .card-jobtitle {
      bottom: 16px;
      letter-spacing: 1px;
      font-size: 10px;
    }
  }

  .card-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    height: 160px;
    top: -20%;
    left: 0;
    will-change: top;
    background-size: cover;
    background-position: center;
    filter: blur(30px);
    transform: scale(1.2);
    transition: filter 0.2s ease; /* Simplified transition */
  }

  .card-avatar {
    width: 100px;
    height: 100px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    object-position: center;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-64px);
    transition: left 0.2s ease, width 0.2s ease, height 0.2s ease; /* Added transitions */
  }

  .card-fullname {
    position: absolute;
    bottom: 0;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    transform: translateY(-10px) translateX(-50%);
    transition: font-size 0.2s ease; /* Added transition */
    left: 50%;
  }

  .card-jobtitle {
    position: absolute;
    bottom: 0;
    font-size: 11px;
    white-space: nowrap;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-7px);
    transition: font-size 0.2s ease, letter-spacing 0.2s ease; /* Added transitions */
  }
`;
