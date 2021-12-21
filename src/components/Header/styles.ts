import styled from 'styled-components';

export const Container = styled.header`
  background: var(--gray);

  h1 {
    color: #EDF2F7;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: var(--orange);
    color: #fff;
    font-size: 1rem;
    height: 3rem;
    padding: 0 2rem;
    border-radius: 0.25rem;
    border: 0;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;
