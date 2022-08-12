# react-tailwind-electron-starter

- Vite
- React
- Tailwind CSS
- Storybook
- ESLint
- Prettier (standard)
- Libraries that I use a lot
  - react-router-dom
  - react-icons
  - styled-components
  - classnames
  - lodash
  - date-fns

## Structure

- `/main` - contains backend (Electron) code
- `/renderer` - contains frontend (React) code
- `/shared` - contains shared backend and frontend code
- `/build` - the build output

## Aliases

- `/renderer` - `@` (the default for vite)
- `/main` - `@main`

```bash
gh repo create my-app --private --clone --template react-tailwind-electron-starter
```

## Sharing Code between Electron and React

`references` have been added to both the main and renderer `tsconfig.json` files.

Any shared code should be added to the `shared` folder.

Any changes to `/shared` will cause the application to reload.

## Build

```bash
npm run build
```

## TODO

- [ ] Frontend tests
- [ ] Backend tests
