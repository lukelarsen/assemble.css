Assemble.css is a designless Scss framework. It contains a lot of commonly used components that will allow you to get
 to the fun stuff. You may include only the components that you desire so you don't have to
 include code that you won't be using.


##Installation
###Bower
    bower install assemble.css

Then you'll need to:
* Download the <a href="http://github.com/lukelarsen/assemble.css-template">assemble.css-template</a>
* Place the images and stylesheets directories in your project where you need them.
* Depending on how you structure your app you might need to help Assemble.css find files it needs to compile. You can adjust this in the stylesheets/style.scss file. You need to make sure the path to general-returns.scss and assemble.scss are correct.

You do not need stylesheets/style.meteor.scss and scss.json. They aren't needed when using Bower.

All done.

###Meteor
    meteor add lukelarsen:assemble.css-meteor

Then you'll need to:
* Download the  <a href="http://github.com/lukelarsen/assemble.css-template">assemble.css-template</a>
* Place scss.json file at the root of your project directory
* Place the stylesheets directory in your client directory
* Place the images directory in your public directory
* Remove style.scss from the stylesheets directory. It isn't needed when using Meteor.

NOTE: When you run your app for the first time with Assemble.css it might throw an error saying a file it tried to import wasn't found. Just exit out and run meteor a second time and it will compile just fine.

All done.

##Usage
Assemble.css is very configurable. If you don't want a portion of the framework you don't have to include it in your css
output. You shouldn't need to modify the contents you install via Bower or Meteor. All the
configurations will happen in the assemble.css-template. Within stylesheets/ui/options you can set all the variables that
will include the css code for the components you want. Everything is excluded by default so you will need to go and
set the components you want to true. You may also set some design options by editing the design variables in specific
option files. 

One design variable that often needs updating is $webkit-select-arrow. It looks for an image to use as a background-image
for select boxes. If you move your image dirctory around you'll need to update this variable to point to the svg file.

##What's Included
###Components
* Arrows
* Buttons
* Code Styling
* Forms
* Grids (uses flexbox)
* Icons
* Lists
* Media (Images, Video, Embeds)
* Modals
* Navigation
* Tables
* Tips

###Other
* Reset
* Typography Settings
* Various Helper Mixins
* Responsive Mixins

###Documentation for separate components are coming.

##A note on vendor prefixes
Assemble.css doesn't contain vendor prefixes. In my opinion they change to often and would take extra work to update
 mixins to output different or less prefixes as browsers change. I highly recommend
 <a href="https://github.com/ai/autoprefixer" target="_blank">Autoprefixer</a>. It  will go through your css file and
 compare what it finds with what is on <a href="http://caniuse.com" target="_blank">caniuse.com</a>. If it finds
 something that needs a vendor prefix it will add it. It is beautiful. If you Assemble.css with Meteor this is enabled 
 by default. Otherwise you will need to set it up. I suggest using <a href="http://gulpjs.com" target="_blank">Gulp</a>.


##Credits
###Many ideas and components in Assemble.css came from these fine projects/people.
* <a href="http://typesettings.io/" target="_blank">Typesettings.io</a>
* <a href="http://tympanus.net/" target="_blank">Tympanus.net</a>
* <a href="http://inuitcss.com/" target="_blank">Inuit.css</a>
* <a href="http://philipwalton.github.io/solved-by-flexbox/" target="_blank">Solved By Flexbox</a>
* <a href="http://necolas.github.io/normalize.css/" target="_blank">Normalize.css</a>
* <a href="http://responsivebp.com/" target="_blank">Responsive Framework</a>
* <a href="http://hugogiraudel.com/" target="_blank">Hugo Giraudel</a>
* <a href="http://philipwalton.com/" target="_blank">Philip Walton</a>
* <a href="http://csswizardry.com/" target="_blank">Harry Roberts</a>
