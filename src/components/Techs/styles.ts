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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    padding: 15px;
    > * {
      padding-top: 8px;
      :first-child {
        padding-top: 0;
      }
    }
  }
`
