import styled from '@emotion/styled';

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 128px;

  background-color: #ffffff;

  a {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    text-decoration: none;
    color: #121417;

    &.active {
      color: #f4c550;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 8px;

  img {
    border-radius: 50%;
  }
`;

export const LogoText = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;

  color: #121417;
`;

export const NavigationNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 28px;
`;

export const Authorization = styled.div`
  display: flex;
  gap: 16px;
  align-self: stretch;
`;

export const LoginContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  cursor: pointer;

  svg {
    stroke: #ffdc86;
    cursor: pointer;

    &:hover {
      stroke: #f4c550;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  color: #121417;
  background-color: transparent;

  cursor: pointer;

  &.registration {
    padding: 14px 39px;
    border-radius: 12px;

    color: #ffffff;
    background-color: #121417;
  }
`;
