 <div align="center">
 <img align="center" width="230" src="https://i.imgur.com/pGGFGpi.png" />
  <h2>Javascript Library Boilerplate Basic</h2>
  <blockquote>Minimal Library Starter Kit for your Javascript projects</blockquote>
 
 <a href="https://github.com/hodgef/js-library-boilerplate-basic/actions"><img alt="Build Status" src="https://github.com/hodgef/js-library-boilerplate-basic/workflows/Build/badge.svg?color=green" /></a> <a href="https://github.com/hodgef/js-library-boilerplate-basic/actions"> <img alt="Publish Status" src="https://github.com/hodgef/js-library-boilerplate-basic/workflows/Publish/badge.svg?color=green" /></a> <img src="https://img.shields.io/david/hodgef/js-library-boilerplate-basic.svg" /> <a href="https://david-dm.org/hodgef/js-library-boilerplate-basic?type=dev"><img src="https://img.shields.io/david/dev/hodgef/js-library-boilerplate-basic.svg" /></a> <img src="https://api.dependabot.com/badges/status?host=github&repo=hodgef/js-library-boilerplate-basic" />
 
<strong>This is a basic library boilerplate. For a more robust alternative, check out [js-library-boilerplate](https://github.com/hodgef/js-library-boilerplate).</strong><br />
<strong>Like TypeScript? Check out [ts-library-boilerplate-basic](https://github.com/hodgef/ts-library-boilerplate-basic).</strong>
</div>

## ⭐️ Features

- Webpack 5
- Babel 7
- Hot reloading (`npm start`)
- UMD exports, so your library works everywhere.
- Jest unit testing
- Daily [dependabot](https://dependabot.com) dependency updates

## 📦 Getting Started

```
git clone https://github.com/hodgef/js-library-boilerplate-basic.git myLibrary
npm install
```

## 💎 Customization

> Before shipping, make sure to:

1. Edit `LICENSE` file
2. Edit `package.json` information (These will be used to generate the headers for your built files)
3. Edit `library: "MyLibrary"` with your library's export name in `./webpack.config.js`

## 🚀 Deployment

1. `npm publish`
2. Your users can include your library as usual

### npm

```
import MyLibrary from 'my-library';
const libraryInstance = new MyLibrary();
...
```

### self-host/cdn

```
<script src="build/index.js"></script>

const MyLibrary = window.MyLibrary.default;
const libraryInstance = new MyLibrary();
...
```

> **Note:** In this minimal version, any images and css files you import will be added to the js bundle. If you want them as separate files, you can use [js-library-boilerplate](https://github.com/hodgef/js-library-boilerplate) or edit the Webpack config accordingly.

## ✅ Libraries built with this boilerplate

> Made a library using this starter kit? Share it here by [submitting a pull request](https://github.com/hodgef/js-library-boilerplate-basic/pulls)!

- [Canvas-Txt](https://github.com/geongeorge/Canvas-Txt) - A library to print multiline text on HTML5 canvas with better line breaks and alignments
- [moon-phase-widget](https://github.com/g00dv1n/moon-phase-widget) - Super tiny javascript library to add awesome moon phase widget to your website
- [simple-keyboard-autocorrect](https://github.com/hodgef/simple-keyboard-autocorrect) - Autocorrect module for simple-keyboard
- [simple-keyboard-input-mask](https://github.com/hodgef/simple-keyboard-input-mask) - Input mask module for simple-keyboard
- [simple-keyboard-key-navigation](https://github.com/hodgef/simple-keyboard-key-navigation) - Key navigation module for simple-keyboard
- [swipe-keyboard](https://github.com/hodgef/swipe-keyboard) - Swype type keyboard module for simple-keyboard
