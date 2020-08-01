import styled from 'styled-components'

// TODO: handle menu
export const Container = styled.div`
  display: none;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  top: 0;
  left: 0;
  min-width: 300px;
  padding: 20px;
  height: 90vh;
  background: white;
`
