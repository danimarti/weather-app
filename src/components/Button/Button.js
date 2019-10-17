import styled from 'styled-components';

const Button = styled.button`
  ${({ theme }) => theme && `
    color: #fff;
    box-shadow: 0px 0px 20px #fff;
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 5px 15px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    height: 35px;
    cursor: pointer;
    background: transparent;
    &:hover {
      color: #FFFFFF;
      background: ${theme.color.primary};
    }
  
  `}
`;

export default Button;
