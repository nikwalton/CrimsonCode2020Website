# Contributing
This file contains guidelines and recomended tools for updating this website:
## Getting started on web developement
the Crimsonode website project is set up to be a fairly standard web dev environment. If you are unaware however, there are things you should know.  
1. This website is using the [bootstrap](https://getbootstrap.com/) framework. It's highly recomended you look over the documetation so you understand how things work - such as containers - so the website translates fairly nicely between desktop and mobile platforms.
2. **Any** custom css work needed to customize bootstrap or custom css in general be done should not be done in the html file. place it in the styles.scss file and run `gulp style` or alternatively while `gulp build` is running, gulp will compile that scss into css for you.
3. I recomend [Visual Studio Code](https://code.visualstudio.com/) as a editor for this project, however i dont see why you can't use a more dedicated web editor such as [brackets](http://brackets.io/).
   -Speaking of vscode some handy extensions that are useful for web projects if you havent got some installed yet are [auto close tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) [auto rename tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) and [node module intellisense](https://marketplace.visualstudio.com/items?itemName=leizongmin.node-module-intellisense).
4. and always be familiar with HTML5 and CSS3 before making edits. Thise website isnt a JS heavy project - as of writing this july 2019 - so as always write everything with good style and formatting and have comments.
   - if you need a html/css refresher or help with other web dev things check out [w3schools.com](https://www.w3schools.com/)
## Editing the website
* **All** major edits once the inital website is live - changing the look and feel of the website, animations, new js plugins, etc - should be done in a seperate brach to be merged once the work is as intended for both desktop and mobile. 9/10 times you will need to program in a alternative version for mobile. To check how it looks on mobile, chrome inspector has a mobile simulator if you hit the phone and tablet icon at the top of the chrome editor window.
* The overal design aesthetic of the website should be **coherent** from start to finish. If nobody wants to design a specific look for the website, it's recomended you stick in vain of something like [material design](https://material.io/design/) or other flat design philosophies to keep any graphical work simple enough that it is not bounded to a single designer.
* **ANY** merges for work done not by the Chair/Vice-Char or a designated web designer, should be reviews by atleast one other person before merging and sending it into production.
* Make sure any changes to font or plug-ins is supported by a vast array of web-browsers.
## Conclusion
if you follow these contributing guidelines your web-deelopment process should go smoothly. Feel free to change up colors and iconography on the website for each hackathon season to keep it fresh. Happy coding 😄.