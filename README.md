# React + TypeScript + Vite


### Project Setup
To run this project,

```
npm install
npm run dev
```

![appss1](https://github.com/ceminal/adli-vaka-raporu-uygulamasi/assets/74105512/cdd8052c-9cb2-4d5c-b434-5dd9bb4edab1)
![appformscreen2](https://github.com/ceminal/adli-vaka-raporu-uygulamasi/assets/74105512/2e6e7817-aa6a-490a-af6c-0f31af856072)
![appformScreen](https://github.com/ceminal/adli-vaka-raporu-uygulamasi/assets/74105512/869fb0fe-2c0b-4952-a8fe-a4c5fc9f1396)



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
