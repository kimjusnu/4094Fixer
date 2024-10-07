# 4094Fixer

**Resolve Next.js 4094 errors with automatic cache clearing and package reinstalling.**

## Overview

`4094Fixer` is a simple tool designed to automatically resolve the infamous 4094 error that may occur in Next.js projects. This script clears cached files and reinstalls necessary packages, restarting your development server in the process.

### Features

- **Automatic 4094 Error Detection**: Detects when a 4094 error occurs in your Next.js project.
- **Cache Clearing**: Deletes the `.next` build cache, `node_modules`, and `yarn.lock` (or `package-lock.json` for npm users).
- **Package Reinstallation**: Reinstalls project dependencies using `yarn` or `npm` and restarts the development server.
- **Cross-Platform**: Supports both `yarn` and `npm` for package management.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/4094Fixer.git
   cd 4094Fixer
   ```

2. Install dependencies:

   If using `yarn`:

   ```bash
   yarn install
   ```

   If using `npm`:

   ```bash
   npm install
   ```

---

## Usage

1. **Run the Fixer**:

   If you're using `yarn`:

   ```bash
   yarn clear4094
   ```

   If you're using `npm`:

   ```bash
   npm run clear4094
   ```

   This command will automatically detect the 4094 error, clear your project cache, and reinstall dependencies.

---

## How It Works

- When a 4094 error occurs, `4094Fixer` detects the error and deletes the following files:
  - `.next/` directory (Next.js build cache)
  - `node_modules/` directory (installed dependencies)
  - `yarn.lock` or `package-lock.json` (lock file)
- After that, it automatically reinstalls the dependencies (`yarn install` or `npm install`) and restarts the Next.js development server (`yarn dev` or `npm run dev`).

---

## Example Workflow

1. You're working on a Next.js project and suddenly encounter the 4094 error.
2. Run the `clear4094` command (using `yarn` or `npm`).
3. The cache is cleared, dependencies are reinstalled, and the server is restarted automatically.
4. Continue developing without having to manually fix the 4094 error!

---

## Contribution

If you'd like to contribute, feel free to fork this repository and make a pull request. Issues and suggestions are welcome.

---

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
