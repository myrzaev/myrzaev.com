import styled, { createGlobalStyle } from "styled-components";

interface IStyledMainContainerProps {
  "data-bg": string;
}

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      transition: .3 ease;
    }
  
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    .animation {
        animation: fadeIn 0.6s both;

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translatey(40px);
          }
          100% {
            opacity: 1;
          }
        }
    }
`;

export const StyledMainContainer = styled.div<IStyledMainContainerProps>`
  counter-reset: section;
  color: #2b2c48;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100svh;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  box-sizing: border-box;

  .card {
    max-width: 340px;
    margin: auto;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    transition: 0.3s;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
  }

  .card[data-state="#about"] {
    height: 470px;
    .card-main {
      padding-top: 0;
    }
  }

  .card[data-state="#contact"] {
    height: 430px;
  }

  .card[data-state="#projects"] {
    height: 600;
  }

  .card[data-state="#experience"] {
    height: 550px;
    overflow: hidden;
  }

  .card-main {
    position: relative;
    flex: 1;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
  }

  .card-subtitle {
    font-weight: 700;
    font-size: 13px;
    margin: 0 0 8px 0;
  }

  .card-content {
    padding: 20px;
  }

  .unselect {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;
