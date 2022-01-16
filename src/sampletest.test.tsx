import React from 'react'
import styled from 'styled-components'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { TypographyContainer } from 'src/components/Typography/styles'
import theme from 'src/styles/theme'
import { act } from 'react-dom/test-utils'

const Button = styled.button.attrs(() => ({
  'data-testid': 'my-button-to-test'
}))`
  color: red;
`
interface useCounterOptions {
  initialValue?: number
}
const useCounter = (options?: useCounterOptions) => {
  const { initialValue = 0 } = options || {}
  const [count, setCount] = React.useState(initialValue)
  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)
  return {
    count,
    increment,
    decrement
  }
}

const CustomHookRender: React.FC<{
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  children: (a: any) => null
}> = ({ children, ...restProps }) => children(useCounter(restProps))

const setupHook = (options?: useCounterOptions) => {
  const returnVal = {}
  render(
    <CustomHookRender {...options}>
      {(val) => {
        Object.assign(returnVal, val)
        return null
      }}
    </CustomHookRender>
  )
  return returnVal as ReturnType<typeof useCounter>
}

// Notes:
// use test.only() for isolated test

const asyncExampleFn = ({ fail = false, delay = 2000 }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => (fail ? reject('some error message') : resolve('success')), delay)
  })

describe('Test patterns/examples', () => {
  test('simple test, jest-extended', () => {
    expect(2 + 2).toBe(4)
    // jest-extended
    expect('').toBeString()
  })

  test('styled snapshot test with @testing-library/react', () => {
    expect(render(<Button />).asFragment()).toMatchSnapshot()
  })

  test('using getByTestId', () => {
    const { getByTestId } = render(
      <div>
        hello world
        <Button />
      </div>
    )
    expect(getByTestId('my-button-to-test')).toHaveStyleRule('color', 'red')
  })

  test('using getByTestId again', () => {
    const { getByTestId } = render(
      <div>
        hello world
        <Button />
      </div>
    )
    expect(getByTestId('my-button-to-test')).toHaveStyleRule('color', 'red')
  })

  test('styled snapshot with react-test-renderer and style rule test', () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'red')
  })

  test('styled render with theme', () => {
    renderer.create(<TypographyContainer theme={theme} />).toJSON()
    expect.assertions(0)
  })

  test('simple async test', async () => {
    const result = await asyncExampleFn({})
    expect(result).toBe('success')
    try {
      await asyncExampleFn({ fail: true })
    } catch (e) {
      expect(e).toMatch(/error/i)
    }
  })

  test('simple hook test', () => {
    const hookResult = setupHook()
    act(() => {
      hookResult.increment()
      hookResult.increment()
      hookResult.increment()
    })

    expect(hookResult.count).toBe(3)
  })

  test('simple hook test with initial value', () => {
    const hookResult = setupHook({ initialValue: 5 })
    act(() => {
      hookResult.increment()
      hookResult.increment()
      hookResult.increment()
    })

    expect(hookResult.count).toBe(8)
  })
})
