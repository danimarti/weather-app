import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.2);

  min-height: 80px;

  height: fit-content;
  width: 100%;

  box-sizing: border-box;
  border-radius: 20px;
  padding: 30px;

  ${({ loading }) => loading && css`
    position: relative;
    z-index: 0;
    visibility: hidden;
    &::after {
      visibility: visible;
      position: absolute;
      z-index: 1;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      transform: scale(1);
      animation: ${pulse} 2s infinite;
    }
  `}
  & > *:first-child {
    padding-right: 10px;
  }
  & > *:last-child {
    padding-left: 10px;
    border-left: 1px solid #fff;
  }
`;

export default Card;
