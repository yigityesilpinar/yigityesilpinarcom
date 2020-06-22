import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const SkillContainer = styled.div``

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > ${SkillContainer} {
    margin-right: 20px;
    margin-bottom: 20px;
    box-shadow: ${(props) => props.theme.boxShadow};
    padding: 10px;
  }
`
