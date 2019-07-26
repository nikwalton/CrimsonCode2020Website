![npm](https://img.shields.io/npm/v/npm?style=flat-square)
# CrimsonCode 2020 Website
this repository hosts the redesign of the CrimsonCode website for use by the WSU chapter of Association Of Computing Machinery.
## Getting Started
You should have node which gives us npm as a package manager. 
### Ubuntu Install
---
first update your packages
```
sudo apt update
```
then run
```
suduo apt-install nodejs
```
npm is included with nodejs.
### Windows Install
---
visit the [Node.js website](https://nodejs.org/en/) and download and install the LTS version of node.
## Installing node_modules for developer work
update npm so its up to date in the command line for windows ot terminal for ubuntu
```
npm update
```
then install node_modules locally by running
```
npm install
```
once node_modules is installed you can run
```
gulp
```
to see any changes done to website. The website will open as a local host and will update automatically to file changes due to browser sync being enaabled in the gulp file
## Coding style
follow [google's guide for html/css](https://google.github.io/styleguide/htmlcssguide.html#CSS) and also for [javascript](https://google.github.io/styleguide/jsguide.html)
## Deployment
Deployment will happen later
## Built With
* HTML5/CSS
* Sass
* Javascript
## Contributing
For style guidelines and tips for the general health of the website, see [CONTRIBUTING.MD](CONTRIBUTING.MD)
## Authors
* **Nikolaus Walton** - *initial Development* - [nikwalton](https://github.com/nikwalton)
## License
This project is mainted under the MIT License found at [LICENSE](LICENSE)
