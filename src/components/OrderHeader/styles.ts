import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 8rem;
  }

  > div {
    background: none;
    border: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    div {
      text-align: right;
      h3 {
        margin-bottom: 0.125rem;
        font-weight: 500;
        color: #fff;
      }
      span {
        color: yellow;

        strong {
          font-weight: 500;
          font-size: 1.25rem;
        }
      }
    }

    svg {
      flex-shrink: 0;
      fill: #fff;
      width: 2.875rem;
      height: 2.875rem;
    }
  }
`
