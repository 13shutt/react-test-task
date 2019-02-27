import styled, { css } from 'styled-components'

const CardWrapper = styled.section`
  ${({ main }) => 
    main && css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 260px;
      width: 300px;
      margin: 15px 5px;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `
  }
`

export default CardWrapper