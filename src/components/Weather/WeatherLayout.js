import styled from 'styled-components';

const WeatherLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;


  padding: 10px;

  & > * {
    margin-bottom: 5px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  ${({ theme }) => theme && `
    @media (min-width: ${theme.breakpoint.lg}) and (max-width: ${theme.breakpoint.xl}) {
      margin: 0;
    }

    @media (min-width: ${theme.breakpoint.xl}) {
      margin: 0;
    }
  `}
`;

export default WeatherLayout;
