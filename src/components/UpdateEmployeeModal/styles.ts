import styled from "styled-components";

export const Container = styled.form`
  position: relative;

  h2 {
    color: var(--gray);
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }

  .close-modal {
    border: 0;
    position: absolute;
    right: 2rem;
    top: 1.25rem;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8)
    }
  }
`;

export const SimpleGrid = styled.div`
  display: grid;
  max-width: 100%;
  gap: 1rem;
  grid-template-columns: 2fr 1fr;
  margin: 0 2rem 1rem 2rem;

  &.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.address {
    grid-template-columns: 1fr 2fr 1fr;
  }

  &.personal {
    grid-template-columns: 2fr 1fr 1fr;
  }

  &.jobinfo {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 2rem;
  }


  input {
    height: 3rem;
    padding: 0 1.5rem;
    width: 100%;
    border-radius: 0.5rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 2rem 2rem 0;

  .save {
    width: 10rem;
    height: 2.5rem;
    padding: 0 1rem;
    background-color: var(--orange);
    color: #fff;
    border: 0;
    border-radius: 0.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8)
    }
  }
`;