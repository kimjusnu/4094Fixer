# 4094Fixer 🚀

**Resolve Next.js 4094 errors with automatic cache clearing and package reinstalling.**

## Overview ✨

`4094Fixer` is a simple yet powerful tool designed to automatically tackle the dreaded 4094 error that can sometimes pop up in Next.js projects. Instead of manually clearing caches and reinstalling packages every time, let `4094Fixer` handle all the grunt work while you focus on building amazing things. 💡

### Features 🛠️

- **Automatic 4094 Error Detection**: Instantly catches the pesky 4094 error as soon as it occurs.
- **Cache Cleanup**: Wipes out the `.next` build cache, `node_modules`, and `yarn.lock` (or `package-lock.json` for npm users).
- **Quick Reinstall**: Automatically reinstalls all the dependencies and restarts your development server, so you don’t have to!
- **Works with Both Yarn and NPM**: Doesn’t matter what package manager you’re using – we’ve got you covered. 😉

---

## Installation 📦

1. **Clone the repository:**

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

## Usage🖥️

1. **Run the Fixer**:

   If you're using `yarn`:

   ```bash
   yarn clear4094
   ```

   If you're using `npm`:

   ```bash
   npm run clear4094
   ```

   This magical command will detect the 4094 error, clear all the necessary caches, reinstall the packages, and restart your server. Easy peasy, lemon squeezy! 🍋

---

## How It Works 🔧

Here’s what happens under the hood when `4094Fixer` works its magic:

### Cache Cleanup 🧹

Deletes the following directories and files:

- `.next/` directory (Next.js build cache)
- `node_modules/` directory (installed dependencies)
- `yarn.lock` or `package-lock.json` (depending on your package manager)

### Package Reinstallation 📦

Once the cleanup is complete, it reinstalls the necessary packages using `yarn install` or `npm install`.

### Server Restart 🚀

After everything is back in place, it automatically restarts the Next.js development server (`yarn dev` or `npm run dev`).

---

## Example Workflow

1. You're working on a Next.js project and suddenly encounter the 4094 error.
2. Run the `clear4094` command (using `yarn` or `npm`).
3. The cache is cleared, dependencies are reinstalled, and the server is restarted automatically.
4. Continue developing without having to manually fix the 4094 error!😊
