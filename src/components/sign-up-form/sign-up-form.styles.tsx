import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 960px) {
    margin-top: 30px;
    width: 330px;
  }

  @media screen and (max-width: 380px) {
    margin-top: 30px;
    width: 310px;
  }
`;
