# Vite React Figma Plugin Template

A template project for developing Figma plugins, using a monorepo structure and modern frontend technology stack.

## Tech Stack

- 🚀 Vite - Next Generation Frontend Tooling
- ⚛️ React - A JavaScript library for building user interfaces
- 📦 pnpm - Fast, disk space efficient package manager
- 🎨 TypeScript - JavaScript with syntax for types
- 🔧 Monorepo - Multi-package repository architecture

## Project Structure

```
packages/
  ├── common/        # Shared utilities and type definitions
  ├── core/          # Figma plugin core logic
  └── ui/            # React user interface
```


## Getting Started

1. Clone the project
```bash
git clone [your-repository-url]
cd vite-react-figma-plugin-template
```

2. Install dependencies
```bash
pnpm install
```

3. Development mode
```bash
pnpm dev
```

4. Build project
```bash
pnpm build
```

5. Clean build files
```bash
pnpm clean
```

## Features

- 📦 Monorepo architecture for better package management
- 🔥 Fast development experience with Vite
- 💪 TypeScript support for type safety
- 🎨 Modern Figma plugin development experience
- 🚀 Ready-to-use development environment

## Development Guide

- `packages/common`: Contains shared utilities and type definitions
- `packages/core`: Contains Figma plugin core logic and Figma API interactions
- `packages/ui`: React components and pages for the user interface

## Contributing

Issues and Pull Requests are welcome to help improve this project!

## Figma Plugin Usage

1. In the Figma desktop client, click `Plugins` > `Development` > `Import plugin from manifest...`
2. Select the `dist/manifest.json` file generated after building the project
3. Once imported, you can find and run the plugin in Figma's plugin menu
4. During development, run `pnpm build dev` to enable watch mode, which automatically monitors file changes and updates the build artifacts in the dist directory

Notes:
- First-time usage requires enabling developer mode in Figma
- If the plugin interface isn't displaying correctly, check the console for error messages
- During development, it's recommended to open Figma's developer tools for debugging (right-click plugin > Inspect)
- In watch mode, code changes will trigger automatic rebuilds, but you'll need to manually reload the plugin in Figma to see the latest changes

## License

MIT License 