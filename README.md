![Github Social](https://repository-images.githubusercontent.com/285764249/fdb16700-d8ba-11ea-80b2-69ffff59932f)

# WordPress Gulp 4 Task Runner

A Gulp v4 task runner for WordPress theme development with Sass and BrowserSync. This is my personal workflow automation process for WordPress theme development and is a WIP for future enhancements.

## Prerequisite

If `gulp-cli is` not already installed:
```bash
npm install gulp-cli -g
```

## File and Folder Structure

```bash
mythemefolder
├── assets
│   ├── js
│   │   ├── library-01.js
│   │   └── library-02.js
│   └── sass
│       ├── partials
│       │   ├── _partial-01.scss
│       │   └── _partial-02.scss
│       └── style.scss
├── .gitignore
├── package.json
└── style.css
```

## Automate

```bash
gulp watch
```
