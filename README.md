# Redux 직접 만들어보기

- js를 사용해서 redux를 직접 만들어 보기

### 실행

```
$ yarn
    or
$ npm i

이후

$ yarn dev
$ npm run dev
```

### 폴더 구조

```
/redux
    | --- node_modules
    | --- public
    | --- .gitignore
    | --- index.html
    | --- src
    | --- .eslintrc.cjs
    | --- tsconfig.json
    | --- tsconfig.node.json
    | --- vite.config.ts
    | --- yarn.lock
    | --- package.json
```

### Scripts

```
{
  "name": "redux",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@typescript-eslint/eslint-plugin": "^5.57.1",
    "@typescript-eslint/parser": "^5.57.1",
    "@vitejs/plugin-react-swc": "^3.0.0",
    "eslint": "^8.38.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "typescript": "^5.0.2",
    "vite": "^4.3.2"
  }
}
```
