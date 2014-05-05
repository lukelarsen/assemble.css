Assemble.css is a designless scss framework. It contains a lot of commonly used components that will allow you to get
 to the fun stuff. You may include only the components that you desire so you don't have to
 include code that you won't be using.


##Installation
###Bower
    bower install assemble.css

Then download the assemble-template and place it in your file structure where you want. In the downloaded
assemble.css-template open css/style.scss and put in the correct path to assemble.css that you installed via bower.

All done.

###Manual
Download assemble.css from Github and extract it in your project directory. Then download the assemble-template and
place it in your file structure where you want. In the downloaded assemble.css-template open css/style.scss and put in
the correct path to the _assemble.scss found in this repository.

All done.

##Usage
Assemble is very configurable. If you don't want a portion of the framework you don't have to include it in your css
output. You shouldn't need to modify the contents you install via Bower or download from this repository. All the
configurations will happen in the assemble.css-template. Within css/ui/options you can set all the variables that
will include the css code for the components you want. Everything is excluded by default so you will need to go and
set the components you want to true. You may also set some design options by editing the design variables in specific
option file.

###Documentation for separate components are on their way.

####Credits
Bourbon.io
font-face mixin

Typesettings.io
Setting the type

Tympanus.net
Modals

Inuit.css
Many ideas and components

Some guy see code pen
Responsive Tables

Dialogs
Vex.js

Normalize.css
Reset

Responsive Framework
Media Object, List Object

Hugo
Inspiration for a lot of things

Grids
http://philipwalton.github.io/solved-by-flexbox/demos/grids/