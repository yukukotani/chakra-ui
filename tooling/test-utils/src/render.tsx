import { ChakraProvider } from "@chakra-ui/provider"
import theme from "@chakra-ui/theme"
import "@testing-library/jest-dom/extend-expect"
import { render as rtlRender, RenderOptions } from "@testing-library/react"
import { toHaveNoViolations } from "jest-axe"
import React from "react"
import userEvent from "@testing-library/user-event"

expect.extend(toHaveNoViolations)

export interface ChakraRenderOptions extends RenderOptions {
  withChakraProvider?: boolean
}

export function render(
  ui: React.ReactElement,
  { withChakraProvider, ...options }: ChakraRenderOptions = {
    withChakraProvider: true,
  },
): ReturnType<typeof rtlRender> & { user: ReturnType<typeof userEvent.setup> } {
  const { wrapper: Wrapper = React.Fragment, ...rtlOptions } = options
  const user = userEvent.setup()

  const MaybeChakraProvider = withChakraProvider
    ? ChakraProvider
    : React.Fragment

  const props = withChakraProvider ? { theme } : {}

  const result = rtlRender(
    <MaybeChakraProvider {...props}>
      <Wrapper>{ui}</Wrapper>
    </MaybeChakraProvider>,
    rtlOptions,
  )
  return { user, ...result }
}
