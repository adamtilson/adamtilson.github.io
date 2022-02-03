## ENSE 271 - People-Centred Design - Laboratory

# Lab 3: Medium-Fi Wireframes with Adobe XD

### University of Regina
### Faculty of Engineering and Applied Science - Software Systems Engineering

### Lab Instructor: [Adam Tilson](mailto:Adam.Tilson@uregina.ca)

---

## 1.0 Introduction

In this lab we will:
- Get familiar with the UI and design tools available in Adobe XD
- Investigate how to create low fidelity prototypes
- Do a complete example of a medium fidelity (med-fi) prototype of a website

## 2.0 Adobe XD Overview

Let's start with a more in-depth overview of the UI from the previous lab.

![XDUI][XDUI]

1. Filename - Set your filename here
    - The cloud icon means the file is saved on Adobe's Creative Cloud servers
    - To save it locally, instead do a `Hamburger` -> `Save As Local Document...`
2. The `Hamburger` replaces the `File` menu in other apps. On Mac, these options are instead in the menu bar. 
    - It includes standard operations like save, open, import, export, etc.
    - Importantly you can add libraries, plugins and ui kits here
    - The `Home` menu goes to the welcome splash screen for opening projects  
    - `Design` is where we'll work in this lab, creating static 2D wireframes
    - `Prototype` allows you to add interactivity to your designs - we'll look at this next lab
    - Share lets you share and collaborate using creative cloud.
3. The toolbar on the left contains standard design tools
    - The arrow cursor shaped tool at the top is the `Select` tool, used for selecting, moving, resizing, copying, pasting, etc.
      - After selecting an object, gizmo's will appear to allow further manipulation
![gizmos][gizmos]
        - You can also right click objects for contextual options
    - The next three down are drawing primitives, `Rectangle`, `Ellipse`, `Polygon`
    - You can make lines with the `Line` or `Pen` tools
    - You can add text with the `Text` tool
    - `Artboard` lets you add more artboards to represent additional screens in your prototype
    - Finally, there are some `Zoom` tools
    - The best way to add images to your prototype is to draw the shape of the image using shape primitives (e.g. `Rectangle`, `Circle`), and then drag and drop an image on to this primitive from your operating system's file browser. This creates a masked image, which is like a window looking through your prototype to your image. If the image is not cropped or sized as desired, double clicked on the masked primative, and modify the image behind the mask as desired. When you return to your view, only the masked portion will be displayed.
4. The menu in the lower left allows you to change what appears in left sidebar (5)
    - `Libraries` let you use Creative Cloud libraries to group commonly used assets. We won't do this for this lab.
    - `Layers` let you quickly overview your project by seeing the objects in the artboard nested as a hierarchy. This is a very useful view for finding hard to see things, and by changing the listed order by dragging and dropping elements in the list, you can also set the depth of objects (higher on the list means closer to the screen, lower means further away).
    - `Plugins` add more functionality to XD. e.g. `auto-icon`
5. Here you can use the tool you have selected in (4). 
    - For example, if you have selected libraries in (4), you will find assets here you can drag and drop into your project.
6. Center stage is where you can work on your artboards
    - Artboards are like screens, or pages. It acts as an interactive collage where you can drag and drop things around.
    - Artboards have a name, height, width.
    - Resize and rename an artboard by clicking on it's name in the upper left
    - If the artboards height or width is greater than the space available on one screen, scrollbars will be added. The blue dashed-line gizmo can also control how much space should appear on a screen at one time
    - You can have multiple artboards in one project.
    - You can add, arrange, and delete them as needed.
![Artboard][Artboard]
7. Share, preview and zoom tools are here. 
    - Preview lets you view your design in a new window
      - We will use this more next lab where we add interactivity
    - If you have the Adobe XD app installed on your phone, you can upload previews to it to see how it will work on that device.
    - We'll explore interactivity in the next lab
8.  The properties inspector here allows you to modify the selected element based on its type. This includes things like:
    - Border and fill colors of primitives
    - Font styles for text
    - Visual effects, like blurring, shadow and gradients
    - Some advanced tools, like `Repeat Grid`
    - If you want to fine tune a property of an element, and don't know where to look, check either here, or the right-click context menu.

## 3.0 Lo-Fi Prototyping

Adobe XD can be used for Low Fidelity (lo-fi) prototyping.

Lo-fi prototyping, (creating wireframes, or mockups) is the simplest way to roughly lay out the visual elements of your design. These mock-ups are purposefully rough and devoid of detail or color so that one is forced to focus on the structure, and remain uncomitted to the design thus remaining open to change.

Dedicated tools exist for this, like Balsamiq, but we can also easily simulate this in Adobe XD.

Baslamiq has a good explanation of [Wireframes here](https://balsamiq.com/learn/articles/what-are-wireframes/).

You can get started [with a UI kit](http://handdrawngoods.com/store/jolly-ui-free-hand-drawn-ui-kit/), or make some simple objects yourself.

Example:

![Lo-fi][Lo-fi]

Let's make some of these elements quickly, and attempt to quickly [prototype one of the pages here](https://balsamiq.com/learn/articles/what-are-wireframes/).

## 4.0. Medium-Fi Prototyping

In Adobe XD, it's often not much harder to create medium-fidelity prototypes, which involve colors, actual images, and content. We can create our layouts using primitive shapes with color, 

But first we might want to add some things to our project...

Adding UI Kits: 

Hamburger -> Get UI Kits -> Apple iOS or Material Design or Windows or whatever

Finding Images: 

Licensing: Always make sure that you have the rights to use the images that you use on your website!

The easiest way to ensure that you can use assets for any purpose is to use Creative Commons CC0 assets - this is a very permissive license which effectively puts the assets in the public domain, allowing anyone to use them for any purpose without even needing to credit their source.

## 5.0 Medium-Fi Example

Let's work through a medium fidelity example. We will try to replicate a website from [Frontend Mentor](https://www.frontendmentor.io/). I have already compiled assets you may want, which you can find in the example files.

Some notes on advanced things we'll look at:

- Repeat Grid

    - When you find you need multiple copies of the same or similar elements, adding them can be time consuming
    - Repeat Grid is a workflow for creating repetition
        - Example: Gallery, Blog Posts, Cards
    - Start by designing one element which will be repeated
        - You can group the elements together to keep yourself organized
    - With the object(s) selected, click the repeat grid button in the inspector
        - Green grabbers appear on the top and side
        - You can stretch these out and drag in the x or y directions
        - Multiple copies will appear
    - You can adjust the spacing by changing the pink spacing gizmo between copies
        - You can update elements of individual grid elements by clicking and modifying
    - You can update images by selecting a copy, and dragging and dropping onto the target one or mutliple images from your file browser. Cool!
        - Images will be automatically masked – you can double click to fine tune alignment if the auto masking was way off
        - You can also drag in text files to auto-populate titles and text components, with one line in the text file corresponding to one instance of the object
    - Finally, if you need to fine tune elements after populating, you can break the repeat grid. After this, all of your elements are just like normal objects. Cool!

![repeat-grid-gizmos][repeat-grid-gizmos]

- Gradients

    - A simple color effect which is popular online is a gradient. This is a fill effect where a color gradually blends into another color linearly
        - In order to use a gradient, in the property inspector change the fill type from Solid to linear gradient
        - You can choose the color at each end
        - You can also choose opacity at each end
        - You can move the gradient line gizmo in the object to change the direction of the blend

## Assignment

Head to the website [Frontend Mentor](https://www.frontendmentor.io/challenges), which includes a number of front end design challenges. Find a free challenge which looks interesting to you, in the difficulty range Junior or above, and attempt to create a medium fidelity prototype of it in Adobe XD.

- You may optionally link your GitHub account to download images, but it's not strictly necessary, you could instead look for appropriate CC0 stock images and use them in place. Some designs use only primitives.

- For this lab, focus on desktop designs. You don't need to worry about mobile layouts.

- When submitting, provide a link to the challenge you are trying to complete

## Submission

Please submit your Adobe XD file to URCourses by the due date. Please also include a text document with a link to the design you attempted to recreate.

---

## References

P. Guilizzoni, [What Are Wireframes](https://balsamiq.com/learn/articles/what-are-wireframes/), Balsamiq Wireframing Academy, Balsamiq Studios, LLC

E. Key, [Prototyping a WordPress Project in Adobe XD](https://www.lynda.com/Web-tutorials/Prototyping-WordPress-Project-Adobe-XD/2809592-2.html), Linda from LinkedIn, 2019

[Lo-fi]: res/lofi.png "Lo-fi"
[XDUI]: res/xd-ui.png "XD User Interface"
[gizmos]: res/gizmos.png "Gizmos for resizing"
[repeat-grid-gizmos]: res/repeat-grid-gizmos.png "Repeat grid gizmos"
[Artboard]: res/artboard-gizmos.png "Artboard gizmos"