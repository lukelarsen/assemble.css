Assemble.css is a designless scss framework. It contains a lot of commonly used components that will allow you to get
 to the fun stuff. You may include only the components that you desire so you don't have to
 include code that you won't be using.


##Installation
###Bower
    bower install assemble.css

Then download the <a href="http://github.com/lukelarsen/assemble.css-template">assemble.css-template</a> and place it
 in your file structure where you want. In the
downloaded assemble.css-template open css/style.scss and put in the correct path to the _assemble.css file that was
installed via bower.

All done.

###Manual
Download assemble.css from Github and extract it in your project directory. Then download the
<a href="http://github.com/lukelarsen/assemble.css-template">assemble.css-template</a> and place it in your file
structure where you want. In the downloaded assemble.css-template open css/style.scss and put in the correct path to
the _assemble.scss file found in this repository.

All done.

##Usage
Assemble is very configurable. If you don't want a portion of the framework you don't have to include it in your css
output. You shouldn't need to modify the contents you install via Bower or download from this repository. All the
configurations will happen in the assemble.css-template. Within css/ui/options you can set all the variables that
will include the css code for the components you want. Everything is excluded by default so you will need to go and
set the components you want to true. You may also set some design options by editing the design variables in specific
option files.

##What's Included
###Components
* Arrows
* Buttons
* Code Styling
* Dialogs
* Forms
* Grids (uses flexbox)
* Icons
* Lists
* Media (Images, Video, Embeds)
* Modals
* Navigation
* Tables
* Tool Tips

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
 something that needs a vendor prefix it will add it. It is beautiful.


##Credits
###Many ideas and components in Assemble.css came from these fine projects/people.
* <a href="http://typesettings.io/" target="_blank">Typesettings.io</a>
* <a href="http://tympanus.net/" target="_blank">Tympanus.net</a>
* <a href="http://inuitcss.com/" target="_blank">Inuit.css</a>
* <a href="https://github.com/HubSpot/vex" target="_blank">Vex.js</a>
* <a href="http://necolas.github.io/normalize.css/" target="_blank">Normalize.css</a>
* <a href="http://responsivebp.com/" target="_blank">Responsive Framework</a>
* <a href="http://hugogiraudel.com/" target="_blank">Hugo Giraudel</a>
* <a href="http://philipwalton.com/" target="_blank">Philip Walton</a>
* <a href="http://csswizardry.com/" target="_blank">Harry Roberts</a>