<p>
  <a href="https://www.npmjs.com/package/@roa-ai/ui">
    <img
      src="https://img.shields.io/npm/v/@roa-ai/ui.svg"
      alt="npm"
    >
  </a>
  <a href="https://github.com/roa-ai/roa-ui/blob/master/LICENSE">
    <img
      src="https://img.shields.io/github/license/mashape/apistatus.svg"
      alt="MIT"
    >
  </a>
  <a href="https://roa-ai.github.io/roa-ui/">
    <img
      src="https://img.shields.io/readthedocs/pip.svg"
      alt="docs"
    >
  </a>
</p>

# Roa Design System

A react based ui components.

We created to help our team get started with creating their own react component library using:

- [React](https://reactjs.org/)
- [Rollup](https://rollupjs.org/guide/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)

It also features:

- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)

## Install

```
npm install --save @roa-ai/ui
```

## Development

### Building

```
npm run build
```

### Storybook

To run a live-reload storybook server on your local machine:

```
npm run storybook
```

To export your storybook as static files:

```
npm run storybook:build
```

Also, can deploy to gh-pages:

```
npm run storybook:deploy
```

## Usage

```tsx
import React from 'react';
import { Button } from '@roa-ai/ui';

const Example = () => (
  <Button text="Hello Roa 👋" onClick={() => console.log('Hello Roa 👍')} />
);

export default Example;
```
