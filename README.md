Development package for kingcounty.gov
=======================================

Prerequisites 
---------------------------
* Install [git](http://git-scm.com/)
* Install [node](https://nodejs.org/download/)

Package Installation
-----------
Enter these commands from terminal after creating a development folder. This package uses the [grunt](http://gruntjs.com/) task manger to perform most tasks.

* Clone pkg at [https://github.com/aragonwa/kcdev.git]
```
git clone https://github.com/aragonwa/kcdev.git
```

*  Install package using npm
```
npm install
```

* Install grunt
```
npm install -g grunt-cli
```

* Compile development files
```
grunt development
```
* Other grunt commands

`grunt html` - compiles jade files
`grunt scripts` - compiles javascript files
`grunt styles` - compiles less files
`grunt development` - will run all three previous commands

Folder structure
------------------------
``````````````
/ grunt -- files for grunt tasks 
/ public -- this folder will hold the compiled html, css and js files
  -/ css -- complied css files
  -/ js -- complied js files
  -/ img -- image files for base templates and testing
  - theme-caring.html, theme-corporate.html, theme-default.html, theme-environment.html -- theme html pages
  - index.html - lising of all the rendered jade files in /jade folder
/ src -- Sources files
  -/jade -- these files are compiled to create the html files in the /public folder
      - index.jade -- this create a html page that lists of all the files in /jade (not including subfolders)
      - theme-caring.jade, theme-corporate.jade, theme-default.jade, theme-environment.jade -- theme pages
  -/js -- 
    - main.js -- King County specific scripts
    - /vendor -- scripts not created by King County
    - /scripts -- script developed by King County or vendor that are not included in main.js
  -/less -- Less files that are compiled into css files
````````````

Adding your own HTML/Jade page
------------------------
Jade is a template engine that compiles to HTML. It's not a requirement to use Jade, however the grunt commands were created to compile Jade files. [Learn more about Jade](http://jade-lang.com/)

If you want to add a Jade file, add it to the `/src/jade` folder and then run `grunt html`. 

Otherwise you can complie the base Jade files with the `grunt development` command and then duplicate and modify one of the theme files in the public folder. 

Adding your own test JavaScript
---------------------------
If you not using Jade, you can insert your JavaScript code inline or place it in the `public > js` folder. If you are using Jade, you can add your code to the block named `custom-js`. It's at the bottom of the page. Make sure to indent two spaces under the `script.` tag. When you are done run the `grunt html` command. 
`````````````````````````````
block custom-js
  <!-- Custom JS -->
  script.
    function myCode(){

    }
```````````````

Adding your own test CSS
---------------------------
If you not using Jade, you can insert your CSS code inline or place it in the `public > css` folder. If you are using Jade, you can add your css to the block named custom-style. It's at the top of the page. Make sure to indent your two spaces under the `style.` tag.  When you are done run the `grunt html` command. 
`````````````````````````````
block custom-style
  <!-- Custom CSS -->
  style.
    #myCss {

  }
```````````````