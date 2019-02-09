# 🌞 A quick digital resume for summer 2018

Created a _very static_ timeline and digital resume website. Includes a bit about me and some recent works. Big *WIP* for now.  From design to development to live < 48 hours.

## Timelke

### Setup GatsbyJS + React + Contentful
*[x] Unleash the GatsbyJS in project 🚀
*[x] Setup connection Contentful
*[] Turn static files in to dynamic React components
*[] Load multiple images in projects through Contentful

### Improve functionality
*[] Navigation (onclick, mouseleave, animation) less buggier

### Add functionality
*[] Add blog post section
*[] Add projcect pages for case studies

### Refactor code
*[] Component based styling, extracted from specific scss files
*[] Remove jQuery and turn vanilla JS 🍦

### Improve code
*[] Implement Typescript


## Before everything
- You'll need [Node](https://nodejs.org/) (which includes NPM).
- Install Gulp using `npm install -g gulp`. This installs Gulp globally and is needed later.
- Clone this repo to your local computer
- Edit project.json with your datas
- Install the nodes modules
```shell
$ npm install
```
## Run the project

Based on the [Gatsby Contentful Starter](https://github.com/contentful-userland/gatsby-contentful-starter)

* Run project locally
```shell
yarn run dev
```
* Run a production build into ./public. The result is ready to be put on any static hosting you prefer.
```shell
yarn run build
```
* Run a production build into ./public and publish the site to GitHub pages.
```shell
yarn run deploy
```
* Removes all dependencies, scripts and data from the installation script.
```shell
yarn run cleanup-repository
```

### License

MIT
