import styled from 'styled-components';

const DefaultLayout = styled.div`
  ${({ theme }) => theme && `
    width: 100vw;
    height: 100vh;

    background: linear-gradient(to bottom, rgba(32,124,229,1) 0%, rgba(73,155,234,1) 49%, rgba(73,155,234,1) 55%, rgba(73,155,234,1) 55%, rgba(73,155,234,1) 100%);
    
    box-sizing: border-box;
    margin: auto 0;
    padding-left: ${theme.padding.sm};
    padding-right: ${theme.padding.sm};
    
    display: grid;
    grid-template-columns: 1fr;

    overflow-y: scroll;

    @media (min-width: ${theme.breakpoint.sm}) and (max-width: ${theme.breakpoint.lg}) {
      padding-left: ${theme.padding.md};
      padding-right: ${theme.padding.md};

      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${theme.breakpoint.lg}) and (max-width: ${theme.breakpoint.xl}) {
      padding-top: ${theme.padding.lg};
      padding-left: ${theme.padding.lg};
      padding-right: ${theme.padding.lg};

      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${theme.breakpoint.xl}) {
      padding-top: ${theme.padding.lg};
      padding-left: ${theme.padding.xl};
      padding-right: ${theme.padding.xl};

      grid-template-columns: 1fr 1fr;
    }
  `}
`;

export default DefaultLayout;
