# @chakra-ui/storybook-addon

## 4.0.4

### Patch Changes

- Updated dependencies []:
  - @chakra-ui/react@2.2.4
  - @chakra-ui/icons@2.0.4

## 4.0.3

### Patch Changes

- Updated dependencies []:
  - @chakra-ui/react@2.2.3
  - @chakra-ui/icons@2.0.3

## 4.0.2

### Patch Changes

- Updated dependencies
  [[`612529653`](https://github.com/chakra-ui/chakra-ui/commit/61252965371f1abc5bc6680c14bbd08f97667ea9)]:
  - @chakra-ui/react@2.2.2

## 4.0.1

### Patch Changes

- Updated dependencies []:
  - @chakra-ui/react@2.2.1

## 4.0.0

### Patch Changes

- [`06f29f8cd`](https://github.com/chakra-ui/chakra-ui/commit/06f29f8cdbb10ff1da523e0d0e958b9990d041e1)
  Thanks [@segunadebayo](https://github.com/segunadebayo)! - Bump all packages
  to resolve deps issues

* [#6152](https://github.com/chakra-ui/chakra-ui/pull/6152)
  [`06a09312a`](https://github.com/chakra-ui/chakra-ui/commit/06a09312a5c776350a81e099106be9afda5e8cdd)
  Thanks [@itkrt2y](https://github.com/itkrt2y)! - Update storybook dependency

* Updated dependencies
  [[`400a2091a`](https://github.com/chakra-ui/chakra-ui/commit/400a2091a9463cedb697b32d1ff182c238cd4754),
  [`06f29f8cd`](https://github.com/chakra-ui/chakra-ui/commit/06f29f8cdbb10ff1da523e0d0e958b9990d041e1)]:
  - @chakra-ui/react@2.2.0
  - @chakra-ui/icons@2.0.2

## 3.0.2

### Patch Changes

- Updated dependencies []:
  - @chakra-ui/react@2.1.2

## 3.0.1

### Patch Changes

- Updated dependencies
  [[`e8cce77b2`](https://github.com/chakra-ui/chakra-ui/commit/e8cce77b27714277db576b45d03d2570d590ab8e)]:
  - @chakra-ui/react@2.1.1
  - @chakra-ui/icons@2.0.1

## 3.0.0

### Patch Changes

- Updated dependencies
  [[`3319eca8b`](https://github.com/chakra-ui/chakra-ui/commit/3319eca8bf02b892ea345a68294110919e2963cb),
  [`ddea8d143`](https://github.com/chakra-ui/chakra-ui/commit/ddea8d143e76c0e4758e6ea4b4d881f88b34452d)]:
  - @chakra-ui/react@2.1.0

## 2.0.2

### Patch Changes

- Updated dependencies []:
  - @chakra-ui/react@2.0.2

## 2.0.1

### Patch Changes

- Updated dependencies []:
  - @chakra-ui/react@2.0.1

## 2.0.0

### Major Changes

- [#5879](https://github.com/chakra-ui/chakra-ui/pull/5879)
  [`c390af485`](https://github.com/chakra-ui/chakra-ui/commit/c390af4859bcbcf12c982c677492cd6d4960889f)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Bump all packages
  to next major for Chakra UI version 2.

* [#5989](https://github.com/chakra-ui/chakra-ui/pull/5989)
  [`ed692c0ae`](https://github.com/chakra-ui/chakra-ui/commit/ed692c0ae670bcac92b3da50d141afc6e233dee7)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Omit `src`
  directory from being published to npm

- [#5922](https://github.com/chakra-ui/chakra-ui/pull/5922)
  [`9b3f71ed3`](https://github.com/chakra-ui/chakra-ui/commit/9b3f71ed358f8e0f5a795a02a861a13fa966b341)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Bumped the
  supported version of storybook to >6.4 to support other bundlers than webpack.

  Disable the new Storybook feature flag `emotionAlias` to prevent version
  mismatch issues with emotion:

  ```js live=false
  module.exports = {
    addons: ["@chakra-ui/storybook-addon"],
    features: {
      emotionAlias: false,
    },
  }
  ```

  The ColorMode Toggle moved to the Storybook toolbar together with a new layout
  direction toggle (ltr/rtl).

  A new helper function extracts the ArgTypes for a given Chakra UI component.
  You can quickly preview all variants, sizes and colorSchemes of your
  components which are present in your Chakra UI Theme.

  ```tsx
  // button.stories.tsx
  import { getThemingArgTypes } from "@chakra-ui/storybook-addon"
  import { theme } from "<your-theme>"

  export default {
    title: "Components / Forms / Button",
    argTypes: getThemingArgTypes(theme, "Button"),
  }

  interface StoryProps extends ThemingProps<"Button"> {}

  export const Basic: StoryFn<StoryProps> = (props) => (
    <Button {...props}>Button</Button>
  )
  ```

* [#5882](https://github.com/chakra-ui/chakra-ui/pull/5882)
  [`41b3119f5`](https://github.com/chakra-ui/chakra-ui/commit/41b3119f59226f7c70942d6fd0f46480f9bcf196)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Bump peer
  dependency to React and ReactDOM to >=18

### Minor Changes

- [#5922](https://github.com/chakra-ui/chakra-ui/pull/5922)
  [`9b3f71ed3`](https://github.com/chakra-ui/chakra-ui/commit/9b3f71ed358f8e0f5a795a02a861a13fa966b341)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Replace the button
  on the corner with a toggle tool

### Patch Changes

- [#5990](https://github.com/chakra-ui/chakra-ui/pull/5990)
  [`dfc759a5e`](https://github.com/chakra-ui/chakra-ui/commit/dfc759a5eae79b6147a0dfcbafb71ea398021861)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Fixed an issue
  where the storybook addon did not use the default theme if none was provided
- Updated dependencies
  [[`c390af485`](https://github.com/chakra-ui/chakra-ui/commit/c390af4859bcbcf12c982c677492cd6d4960889f),
  [`ed692c0ae`](https://github.com/chakra-ui/chakra-ui/commit/ed692c0ae670bcac92b3da50d141afc6e233dee7),
  [`c7a1a53ac`](https://github.com/chakra-ui/chakra-ui/commit/c7a1a53ace53020e23c1b92d48ff16d8d8e95709),
  [`41b3119f5`](https://github.com/chakra-ui/chakra-ui/commit/41b3119f59226f7c70942d6fd0f46480f9bcf196)]:
  - @chakra-ui/icons@2.0.0
  - @chakra-ui/react@2.0.0

## 2.0.0-next.5

### Major Changes

- [#5989](https://github.com/chakra-ui/chakra-ui/pull/5989)
  [`ed692c0ae`](https://github.com/chakra-ui/chakra-ui/commit/ed692c0ae670bcac92b3da50d141afc6e233dee7)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Omit `src`
  directory from being published to npm

### Patch Changes

- [#5990](https://github.com/chakra-ui/chakra-ui/pull/5990)
  [`dfc759a5e`](https://github.com/chakra-ui/chakra-ui/commit/dfc759a5eae79b6147a0dfcbafb71ea398021861)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Fixed an issue
  where the storybook addon did not use the default theme if none was provided
- Updated dependencies
  [[`ed692c0ae`](https://github.com/chakra-ui/chakra-ui/commit/ed692c0ae670bcac92b3da50d141afc6e233dee7)]:
  - @chakra-ui/icons@2.0.0-next.2
  - @chakra-ui/react@2.0.0-next.5

## 2.0.0-next.4

### Major Changes

- [#5922](https://github.com/chakra-ui/chakra-ui/pull/5922)
  [`9b3f71ed3`](https://github.com/chakra-ui/chakra-ui/commit/9b3f71ed358f8e0f5a795a02a861a13fa966b341)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Bumped the
  supported version of storybook to >6.4 to support other bundlers than webpack.

  Disable the new Storybook feature flag `emotionAlias` to prevent version
  mismatch issues with emotion:

  ```js live=false
  module.exports = {
    addons: ["@chakra-ui/storybook-addon"],
    features: {
      emotionAlias: false,
    },
  }
  ```

  The ColorMode Toggle moved to the Storybook toolbar together with a new layout
  direction toggle (ltr/rtl).

  A new helper function extracts the ArgTypes for a given Chakra UI component.
  You can quickly preview all variants, sizes and colorSchemes of your
  components which are present in your Chakra UI Theme.

  ```tsx
  // button.stories.tsx
  import { getThemingArgTypes } from "@chakra-ui/storybook-addon"
  import { theme } from "<your-theme>"

  export default {
    title: "Components / Forms / Button",
    argTypes: getThemingArgTypes(theme, "Button"),
  }

  interface StoryProps extends ThemingProps<"Button"> {}

  export const Basic: StoryFn<StoryProps> = (props) => (
    <Button {...props}>Button</Button>
  )
  ```

### Minor Changes

- [#5922](https://github.com/chakra-ui/chakra-ui/pull/5922)
  [`9b3f71ed3`](https://github.com/chakra-ui/chakra-ui/commit/9b3f71ed358f8e0f5a795a02a861a13fa966b341)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Replace the button
  on the corner with a toggle tool

### Patch Changes

- Updated dependencies []:
  - @chakra-ui/react@2.0.0-next.4

## 2.0.0-next.3

### Patch Changes

- Updated dependencies []:
  - @chakra-ui/react@2.0.0-next.3

## 2.0.0-next.2

### Major Changes

- [#5882](https://github.com/chakra-ui/chakra-ui/pull/5882)
  [`41b3119f5`](https://github.com/chakra-ui/chakra-ui/commit/41b3119f59226f7c70942d6fd0f46480f9bcf196)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Bump peer
  depencency to React and ReactDOM to >=18

### Patch Changes

- Updated dependencies
  [[`41b3119f5`](https://github.com/chakra-ui/chakra-ui/commit/41b3119f59226f7c70942d6fd0f46480f9bcf196)]:
  - @chakra-ui/icons@2.0.0-next.1
  - @chakra-ui/react@2.0.0-next.2

## 2.0.0-next.1

### Major Changes

- [#5879](https://github.com/chakra-ui/chakra-ui/pull/5879)
  [`c390af485`](https://github.com/chakra-ui/chakra-ui/commit/c390af4859bcbcf12c982c677492cd6d4960889f)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Bump all packages
  to next major for Chakra UI version 2.

### Patch Changes

- Updated dependencies
  [[`c390af485`](https://github.com/chakra-ui/chakra-ui/commit/c390af4859bcbcf12c982c677492cd6d4960889f)]:
  - @chakra-ui/icons@2.0.0-next.0
  - @chakra-ui/react@2.0.0-next.1

## 2.0.0-next.0

### Patch Changes

- Updated dependencies
  [[`c7a1a53ac`](https://github.com/chakra-ui/chakra-ui/commit/c7a1a53ace53020e23c1b92d48ff16d8d8e95709)]:
  - @chakra-ui/react@2.0.0-next.0

## 1.0.3

### Patch Changes

- [`e1fe48cbe`](https://github.com/chakra-ui/chakra-ui/commit/e1fe48cbe37324744cfe6184d785c093cda1125e)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Bumped patch
  version for every package to fix release process. Root cause was a bug in our
  CI configuration.
- Updated dependencies
  [[`e1fe48cbe`](https://github.com/chakra-ui/chakra-ui/commit/e1fe48cbe37324744cfe6184d785c093cda1125e)]:
  - @chakra-ui/icons@1.1.7

## 1.0.2

### Patch Changes

- [#5536](https://github.com/chakra-ui/chakra-ui/pull/5536)
  [`a503acabe`](https://github.com/chakra-ui/chakra-ui/commit/a503acabefcaea86cb7f40a6305830f09d2d6083)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Bumped patch
  version for every package to fix release process.

- Updated dependencies
  [[`a503acabe`](https://github.com/chakra-ui/chakra-ui/commit/a503acabefcaea86cb7f40a6305830f09d2d6083)]:
  - @chakra-ui/icons@1.1.5

## 1.0.1

### Patch Changes

- [#5340](https://github.com/chakra-ui/chakra-ui/pull/5340)
  [`ab247507a`](https://github.com/chakra-ui/chakra-ui/commit/ab247507ab6d30be356b657f652331801e880e52)
  Thanks [@TimKolberger](https://github.com/TimKolberger)! - Added dependency to
  @chakra-ui/icons

## 1.0.0

### Major Changes

- [#5126](https://github.com/chakra-ui/chakra-ui/pull/5126)
  [`712cc3d1e`](https://github.com/chakra-ui/chakra-ui/commit/712cc3d1e6193ec7d98d195abdb124809f9b9b06)
  Thanks [@ngxCoder](https://github.com/ngxCoder)! - The official Storybook
  Addon for Chakra UI.

  ```sh
  yarn add -D @chakra-ui/storybook-addon
  ```

  ```sh
  npm i -D @chakra-ui/storybook-addon
  ```

  Add the addon to your configuration in `.storybook/main.js`:

  ```js live=false
  module.exports = {
    addons: ["@chakra-ui/storybook-addon"],
  }
  ```
