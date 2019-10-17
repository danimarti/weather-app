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

const Text = styled.span`
  font-family: 'Montserrat';
  font-weight: ${({ fontWeight }) => fontWeight || 500}; 
  font-size: ${({ fontSize }) => fontSize || 14}px;

  color: #fff;

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
      border-radius: 3px;
      transform: scale(1);
      animation: ${pulse} 2s infinite;
    }
  `}
`;

export default Text;
