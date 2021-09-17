<---
layout: default
--->
# Lab 3: CSS and Bootstrap

ENSE 374 - Software Engineering Management - Laboratory

University of Regina - Engineering and Applied Science - Software Systems Engineering

Lab Instructor: [Adam Tilson](mailto:Adam.Tilson@uregina.ca)

---

## Objective

This lab introduces Cascading Style Sheets (CSS), which can be used to add styles to HTML elements. We will look at the different locations styles can be placed (inline, internal and external), the different types of tags which styles can be applied to (by tag type, id or class),  and some example styles which can be applied. We'll discuss syntax, containers, positioning and the box model, and some extra add-ins to bring our page up to date. We'll end our discussion with BootStrap CSS, a library 

## Equipment

Computer running Windows, MacOS or Linux, with an Intel or AMD-based processor (x86 or x86-64) with administrator privileges. 
- A modern web browser, with a strong preference for Firefox or Chrome
- A text editor, preferably VS Code

## Part 1: CSS Overview

### Why we use CSS

CSS is used to apply styles to our elements. This changes the way that they are rendered on the page, so they they no longer take on the default HTML which is reminiscent of the 90s.

- Before CSS, we could only style elements with HTML attributes
    - This is slow and not very flexible
    - What if we want to reuse the same styles across elements? Across pages?

### How to add CSS code?

CSS code can be applied inline, internal, external
- If a style conflict arises, these are the places you need to check!

Inline 
- Embeds CSS code in an HTML tag using the `style` attribute. 
- e.g. `<hr style="width:50%;text-align:left;margin-left:0">`
- Painful - need to apply style on a per element basis

Internal
- Write CSS code inside of the `<style>` tags in the `<head>` of the HTML document.
- Applies styles on a page-by-page basis
    - this is rarely optimal, we typically want site-wide styles
- e.g. 
  
```html
<!DOCTYPE html>
<html>
<head>
<style>
    a:link, a:visited { 
    color: red;
    text-decoration: none;
    cursor: pointer;
    }

    a:hover { 
    text-decoration: underline;
    }
</style>
</head>
<body>

<a href="#"> Go back to the top!</a>

</body>
</html>
```

External 
- All of your CSS is stored in a separate file called, e.g. `css/style.css`
- We add a link to this style sheet in the `<head>` of the HTML:
```html
<link rel="stylesheet" href="css/style.css">
```
- We can add this link to all pages site-wide

### What does a rule look like?

The basic CSS syntax is:

```css
selector { property : value; }
  who        what       how
```

### Cascading

Cascading means styles inherit from other styles, i.e. "cascading down".
- The three factors which determine which apply include
  - Importance: you can specify important tags with `!important`
  - Specificity: more specific rules (e.g. id's) overrule less specific (e.g. classes, elements, or inherrited.
    - Calculated with a complex scoring system.
  - Source order: later rules overrule earlier ones
- Generally, more specific rules will override less specific rules
- In can be tricky to figure out which style should be applying
- When learning, it is useful to use browser debug tools to see which styles are applying

[Here's a good source for info on cascading](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

EXAMPLE HERE!

### Specificity

could use some of this for the example

https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity


Motivating Example - Changing one tag vs changing all tags
Eg. changing one Hr's style. - inline
style="border-top: 1px dashed white"
Changing all the Hr's style

Changing the horizontal rule into something neat
hr {
        border-style: none;
        border-top-style: dotted;
        border-color: grey;
        border-width: 5px
        width: 5%
    }


check out the default style sheet on w3schools
https://www.w3schools.com/cssref/css_default_values.asp








### Default Style Sheet

Every page has styles, unless you specify changes they uses the default style
This is what causes default styled HTML to look like it's from the 90's
It can be useful to understand these default styles to know which changes to make:
- [Here is a link to descriptions of the default values for a CSS](https://www.w3schools.com/cssref/css_default_values.asp)
- [Here is a link to the CSS in a style sheet file.](res/default.css)

### Debugger

In FireFox, you can open up the debugger with `F12`. You can use this to select elements and see which styles are applying:

![](res/css-debugger.png)

### Syntax Checking

VS Code checks your syntax as you type, look for common errors (bottom left)

### Organization

It's best practice to Alphabetize Selectors and Properties 
    - it will make yours or your colleagues life easier at some point
Alternately, you may wish to group selectors by type, e.g. Tag, Class, ID

### Comments

CSS uses C-style comments:

```css
h1 { 
    /* Make h1's red. */
    color: red; 
}
```
### Where to get help?

This is a great tutorial, which acknowledges how wonky CSS can be sometimes:

[Mozilla's MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS)

## Part 2 CSS Selectors, Proprties and Values

Next let's examine some of the details which make CSS so powerful (and also so tricky!)

### Selectors

Elements can be selected by a number of rules. Some rules select individual elements, others select groups. Further, some inheritance rules apply which will propagate through to children elements.

### Tag Selectors

Also known as element selectors. Applies style to all tags of that type. Very broad strokes.
```css
h1 {
    color: red;
}
```
This code will apply to all `<h1>` tags.

### Class Selector

Selects all elements of a given class. 
- You can assign elements to a class in the HTML code using the HTML attribute `class="<class_name>"`
- Multiple classes may be applied to a single object, separated by a space.
  - it's best practice to only use one custom class, and attach others as needed by frameworks such as bootstrap, e.g. `class="<custom_class> <bootstrap_class>`
- target them in CSS with the selector: `.<class_name>`

e.g.
``` html
...
<h1 class="headers"> Lab 3 </h1>
```

```css
.headers { 
  color: red;
}
```

This will apply to all tags that have the `headers` class assigned to the class list.

### Id Selector

Selects the single element identified with a particular ID. 
- You can assign elements an ID in the HTML code using the HTML attribute `id="<name>"`. 
- ID's need to be unique, that is, only one element in a page may have a given ID.
- Target this element in CSS with the selector `#<id>`

e.g.
```html
<h1 id="<class_name>">
```
only ever one id selector per object
#<class_name> {
    color: ...;
}

### Pseudo Classes

Some elements have pseudo-classes that are active only during interaction, e.g. link hover
e.g.
```css
a:hover { color:red }
```

### Combining Rules

We can very specifically target an element by combining rules
- If we want to use multiple selectors for a single element, combine them without spaces
e.g. apply this style to all h1's that have the header class:
```css
h1.header {
    color: red;
}
```
We can also find elements which are descendents of an element:
e.g. select all `<p>` elements that are children of a `<section>` tag:
```css
section p {
    color: yellow;
}
```

There are other rules, for example selecting a particular child or sibling. [Check out this reference for more info.](https://www.w3schools.com/css/css_combinators.asp)

Simple is better - Before you commit to complicated combinational logic, decide if a custom class or ID would be better!

### Common Properties and Values:

Color:
- the `color` and `background-color` properties specify the foreground and background colors respectively
- color values can be given by keyword, or hex of the style: `#RRGGBB`
  - e.g. red is `#FF0000`, but will be very hard on the eyes, as we've seen!
  - strongly recommended against just figuring out colors yourself! instead look at a palette app:
    - [ColorHunt](https://colorhunt.co/)
    - [Google Material Design](https://material.io/resources/color/#!/?view.left=0&view.right=0)
    - [MDN Reference on color](https://material.io/resources/color/#!/?view.left=0&view.right=0)

Borders:
- borders are applied with the border property
  - There are general properties which apply to the whole border, special properties for individual sides, and a shorthand style that defines many properties and values in one line
  - general properties
    - border-style : values are keywords - dotted, dashed, solid, double, groove, ridge, insex, outset, none, hidden
    - border-width : values are in px, e.g. 5px, 15px. You can also define the top, right, bottom and left widths in one line.
    - border-color : values are colors
    - border-radius : value in px, e.g. 5px
  - specific properties:
    - border-top-style
    - border-left-color
  - shorthand style
    - border: width style color
    - define all three in one line
[Border Tutorial](https://www.w3schools.com/css/css_border.asp)

Sizing:
- width
- max-width
- height / max-height
  - the units can be in px, percent, mm. `0` doesn't need units.
[Learn more about the many units here](https://www.w3schools.com/cssref/css_units.asp)

Text:
- font-family: values are strings, with later values being fallbacks
- font-size: can use many units, rem is probably safest, where one REM is the size of an `M` at the root scaling. 1 rem = 16px
- font-weight: numeric, where thinner to thicker ranges from 100 to 900
- text-decoration: underline, line-through, overline, etc.




positioning:
padding, margin
display
position, (left, top, etc)
float and clear
text-align
vertical-align
Values: Percent Scaling
If you are trying for consistency between desktop and mobile, one way to go with with percent scaling

viewport
viewport is the screen you are viewing

units
px, %. 
zero is the only value that doesn't need units


Keywords
mdn -> keyword index





## Part 3: Spacing and Positioning with CSS

### Div and Span

Div and Span are HTML elements that exists only as a container for containing other elements
- can be used to apply CSS to elements
- `<div>` a vertical container, blocking
- `<span>` is a horizontal container, non-blocking (inline)

### Box Model

The total space that an object takes is more than you might think, based on the CSS Box Model:

![box model](res/box-model.svg)

- Individual objects have a required size, (width and height), and as they expand objects around them are pushed out of the way.
- But the total sizes of the element add in the margin, padding, border and content gives the total dimensions of the element.
  - Margin and padding are buffer zones around the border.

It adds up,
    10px border + 20px padding + 20px margin = 50px * 2 sides = 100px + contet

- When setting margins, padding and border, the same shorthand can be used as we saw in borders, clockwise from the top:
  - top, right, bottom, left

This box model even applies to the body tag, which has a default non-zero margin. 
    - This is why by default elements don't go right to the corner
    - you will need to set this to 0 if you need something in the corner
  
- Padding will stretch the background color, whereas margin will add white around it

### Flow and the CSS Display Property

The Display property dictates how elements flow around this element: 

- block - push the next content to the next line. eg. div, p
- inline - let info come beside it. eg. link
- inline-block - A hybrid. Images do this. It's like inline, but it can block a bit of height too.
  - [This w3schools example helps you learn the different](https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1)
- none - don't display it. It's gone. Not just hidden. Items will not flow around it either. 
  - `visibility: hidden` will instead allow items to flow around it.
- The flexbox model acts as an alternative to this, but we'll look at Bootstrap instead

### CSS Positioning

- HTML should govern hierarchy and order
- CSS starts with content
  - heights come from here
  - child elements are on top of parents
    - Z-order is how close something is to the front of the screen
  - e.g.:
```html
<div> <h1> <span> </span > </h1> </div>
```
  - span is on top of h1 is on top of div

### Positioning Rules

Positioning can be derived from the HTML, or overridden, using the `position` property, with values:

  - Static - use the HTML rules for positioning
  - Relative - from the static position, offset the element by a specified x,y coordinate value, eg. (3, 5).
    - does not disrupt flow
  - Absolute - position the element by absolute coordinates relative to its parent 
    - does disrupt document flow
  - Fixed - always in the same place as we scroll, eg. a fixed header bar

### Centering Elements

A common operation which can be harder than you might think!

For non-blocking elements
```css
    text-align : center;   
```
For blocking elements:
```css
    max-width : 1000 px; /* or whatever is appropriate*/
    margin : 0 auto 0 auto; /* automatic centering left and right *
```
- you could also have instead done:
```css
    margin: 0 auto;
```
Which will apply the 0 to both top and bottom, and auto to both left and right.

### Floating and Clearing

Floating allows images to "float" around text. 
- values: none, left, right are common

If something floats by default, you can remove float with the "clear" property.
    - this is sort of like: don't float near me
eg: 

float: left;  
clear: left;

Floating can be overused, easy to abuse. Be careful.
[Some help with Float](https://www.w3schools.com/css/css_float.asp)

## Part 4: Boostrap CSS

BootStrap is a library originally developed by Twitter to modernize and standardize web development

- At the simplest, it can be seen as an update to the "default style sheet" which will automatically make an unstyle paged look much more modern
- Additionally, there are a number of pre-defined classes which can be attached to our HTML elements to automatically give them modern styles
- The Current Version, v5, was released September 2020, and broke many things from my lab last year!

### How to install it?

Rather than manually installing it and serving it from our server, we can have the user's browser fetch it from a Content Delivery Network (CDN), a centralized server which caches important files. This is useful for two reasons: it reduces bandwidth for our server, and if the user has previously downloaded it for any other website, it will be cached on their computer, and load instantly. The only problem is, if the CDN ever goes down, our styles will not load. But then again, if the CDN goes down, the internet likley has bigger problems than just your web page.

Content Delivery Network – Distributes common resources on distributed servers around the world, ideally one nearby the user, and the may even have a cached copy on their own computers. Similar to DNS - redirects user to the nearest server which has the content they need. Typically have a proprietary load balancing algorithm that detects where things are in-demand and ensures local copies exist nearby!


Grab a link to it from the CDN, and add the code for it into your HTML file:

[Installation guide](https://getbootstrap.com/)

As with our spreadsheets, the link goes in the head, *before* our custom styles. (This will allow our custom styles to override theirs as needed.)
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

You will also need to paste a JavaScript library into your HTML. This script tag is added in the last line of the body of the document.
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```
### What can it do?

Check out the Examples on Bootstrap’s website which includes pages styled using bootstrap elements

[getbootstrap > examples](https://getbootstrap.com/docs/5.0/examples/)

Eg. Jumbotron, Carousel, Apple-store Type-page

[Bootstrap Cheat Sheet](https://getbootstrap.com/docs/5.0/examples/cheatsheet/)

### Where to get help?
[The official docs are excellent](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

### Responsive Design

Today over half of the visits to your website are from mobile devices. How will your site adapt:

You could...
1. Do nothing and suffer the consequences. 
2. Create a Dedicated mobile site. 
3. Responsive Design,.

Consequences of doing nothing: higher bounce rate. google pagerank suffers.

Bootstrap encourages Mobile First design

Some elements:

### Jumbotron
A large block element near the top of the page for first impressions Sometimes called a "Hero"
- As of Bootstrap 5, no longer a dedicated element

### Navbar
A navigation element

### Carousel
A container where you can swap different contents right to left usually used for showing off images
Interval property - how often it rotates

### Bootstrap Grid
Represented as divs in divs
    - The outer divs assigns the class row
    - the inner divs assign has class col
The grid space is divided into 12 "units", and our column can take up as many units as we want. Eg. 6 units would be 50% width.
    - It is thus easy to have 2, 3, 4 or 6 columns
- We can fix our number of columns with subclasses like col-3
- We can also specify how cols will work depending on screen size

We can also specify different units depending on device.
- e.g. if we wanted: desktop 4 cols, ipad 3 cols, mobile 2 cols
- we would use:
`class="col-lg-3 col-md-4 col-sm-6"`

### Bootstrap Containers

Typically these days there are some common styling elements for containers

- take up 80% width, responsive, that sort of thing
    - Jarring jumps
- This container automatically works for you
- Attach it to a div

Fluid Container – 100% width and smooth scrolling

### Bootstrap Cards
A self-contained piece of data, may includes an image, text
- separated into a header, body and footer region
- cards are stored in a "card deck" and stacks them appropriately
- Less flexible than bootstrap grid for responsive design

### Bootstrap Buttons
Gorgeous...ish? A few different states are possible

### Input Groups
Sometimes certain inputs logically go together - you will certainly see this in our lab exercise! Check out input groups for some examples of how you might be able to put them together

#### Responsive Breakpoints with CSS Media Queries
Media queries are a CSS modifier which checks something about the media (screen) and applies a style based on this: 

```css
@media screen (min-width: 900px) {
    /* Your CSS here */
}
```

Think of it like an if block, these styles will only apply if thes econditions are met.

Bootstrap defines 4 cutoffs: 576, 768, 992, 1200px
|object|size|
|---|---|
|phones in portrait| <576|
|phones in landscape| >576, <768|
|tablets| >768, <992|
|desktops| >990, <1200px|
|ultrawides| >1200px|

### Misc Styling Stuff

### Favicon

The icon which appears in your browser tab is a file called `favicon.ico`, and it is stored in the root directory of your website. You can make it with software like GIMP
```html
<link rel="icon" href="favicon.ico">
```

In modern browsers, you can even use an SVG, e.g. made in Adobe XD. Export a drawing as SVG, and use:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

### Fonts
Fonts on the web are typically grabbed from the Google Fonts CDN, in a similar fashion to BootStrap

- I'm personally a big fan of Geomteric Sans Serif fonts
- It's worth knowing a few serif and sans, particularly knowing which ones to use for accent text and which ones for body text

Some fonts I like:
- Montserrat, Raleway, Poppins, Lexend (Geometric Sans)
- Open Sans, Roboto, Lato (Humanistic Sans)
- Merriweather, Lora, Roboto Slab (Serif)
[Some of the best Google Fonts from Awwwards](https://www.awwwards.com/20-best-web-fonts-from-google-web-fonts-and-font-face.html)

The easiest way to use a Google font is with a CSS import statement:
1. Find a font you like on Google Fonts
2. Select the weights you want to use on your webpage
3. Select the @import option
4. Copy the @import line into yous CSS
5. Use the font-family rule as needed

![](res/google-fonts.png)

