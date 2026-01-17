# Portfolio Frontend

A React-based portfolio application built with Vite.

## Prerequisites

- **Node.js**: >=14.18.0 (Recommended: v18 LTS or v20 LTS)
- **Yarn**: Package manager

## Setup & Run

### With NVM (Recommended)

Ensure you are using the correct Node version.

```bash
# Install and use compatible node version
nvm install 18
nvm use 18

# Install dependencies
yarn install

# Run development server
yarn dev
```

### With Standard Node

Ensure your local Node version meets the requirements.

```bash
# Check version (must be >=14.18.0)
node -v

# Install dependencies
yarn install

# Run development server
yarn dev
```

### With Makefile (Optional)

You can also use `make` commands if you prefer. These commands automatically handle `nvm` version switching (assuming NVM is installed).

```bash
make setup      # Install yarn (global) and project dependencies
make install    # Install dependencies (yarn install)
make dev        # Start development server
make build      # Build for production
make preview    # Preview production build
make deploy     # Deploy to Firebase
```

## Scripts

| Command | Description |
| :--- | :--- |
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build locally |
| `yarn firebase-deploy` | Build and deploy to Firebase |
