import styled, { css } from 'styled-components'

const Wrapper = styled.section`
  ${({ cards }) => 
    cards && css`
      display: flex;
      flex-direction: row;
      width: 75vw;
      justify-content: space-around;
      flex-wrap: wrap;
    `
  }

  ${({ main }) => 
    main && css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
  }
`

export default Wrapper