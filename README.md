# 🌞 A quick digital resume for summer 2018

Created a _very static_ timeline and digital resume website. Includes a bit about me and some recent works. Big *WIP* for now.  From design to development to live < 48 hours.

## To Do

- Fix untrue widths, margin and paddings of main column
- Navigation (onclick, mouseleave, animation) less buggier
- Create slide in animation sections
- More CTA footer

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

There is three kind of environments available : `dev`,  `staging`, `live`. To change the config of each environement you need to edit the __project.json__ file.

- Build and watch the app with __development configs__
```shell
$ npm start
```
* Build app with __staging config__
```shell
$ npm run staging
```
* Build app with __live configs__
```shell
$ npm run live
```

### License

MIT
