# Netfilmx

We are using Node.js v12.0.0, NPM 6.4.1 Chromium v73.0.3683.119 and Electron v5.0.0

## To Do:

- Unjquerear codigo
- Try this: https://medium.com/@yogeshkumarr/production-ready-electron-app-using-react-and-parcel-web-bundler-74dcda63f148 | https://github.com/kumarryogeshh/electron-react-parcel-boilerplate
- SASSear los estilos
- Modularizar los JS
- Brandear
- Put the nodejs version in the package.json and the readme.me
- Make a search input and a result view
- Make a KEY MANAGER and add to the `.gitignore`
- Replace the LICENSE for "my license"
- Solve KEY of OpenSubtitle `var OpenSubtitles = new OS('TemporaryUserAgent');`
- Solve this ones:
    - npm WARN bootstrap@4.3.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer  dependencies yourself.       
    - npm WARN bootstrap@4.3.1 requires a peer of popper.js@^1.14.7 but none is installed. You must install peer dependencies yourself.      
    - npm WARN netfilmx@0.0.1 license should be a valid SPDX license expression
- Optimize the `package.json` file dependencies with only the necessary.
- Test only SRT subs!
- Make a loader after clicking
- Make a Play icon on hover
- Make a filetype manager (for torrents with mkv, etc.)
- Make preloader hidden after movies load
- Make a PROVIDER manager
- Make Search & filter functions
- Make a tracker manager
- Make a CAPTION MANAGER `// #ToDo case "http://api.ysubs.com/" // http://sub.torrentsapi.com/list?imdb= // http://api.yifysubtitles.com/subs/`
- Make a TOR manager `// var tor_url = // ".link .city .to .cab .glass" #ToDo`
- Make a PROXY manager `// https://www.test-cors.org/ // https://jsfiddle.net/1d8cwqo0/1/ // https://jsfiddle.net/Ln47kyt2/3/`

## Install

```bash
# Clone this repository
git clone <repo>
# Go into the repository
cd <folder>
# Install dependencies
npm install
# Run the app
npm start
```
--------------------------

## Build

Installer
```bash
npm run dist
```

# electron-quick-start

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
