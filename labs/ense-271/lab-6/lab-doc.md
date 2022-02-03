## ENSE 271 - People-Centred Design - Laboratory

# Lab 6: Wordpress Themes and Site-building

### University of Regina
### Faculty of Engineering and Applied Science - Software Systems Engineering

### Lab Instructor: [Adam Tilson](mailto:Adam.Tilson@uregina.ca)

---

### 1.0 Introduction

From a design perspective, Content management systems necessarily trade-off some power and performance in favour of ease of use. This means that, as a designer, you will be able to largely match the general design envisioned, but will likely not be able to perfectly replicate it out-of-the box without either installing third-party plugins, some of which are paid, or coding them yourself using a combination of CSS, JavaScript and PHP. As a software engineering student, this should not deter you from using the software. The ultimate goal is that you will be able to design a website which largely matches your envisioned idea, and still be easily transferable to a client, who will be able to further edit it and add content without extensive technical knowledge.

To achieve this goal, we will work today with templates and page builders to quickly get a site up and running and iterate towards our desired design.

We will attempt to implement several pages from the TRAVEL Hyrule site, which we looked at in Prototyping in XD, in wordpress using Gutenberg blocks. We will necessarily observe some of the limitations of the software.

#### Set-up

- Start from a fresh site with Local for this week's lab
  - We will start our site from a template which will install dummy content
- Reminder: In settings: Set title, tagline, and time zone
- You will also want to set perma-links type to "post name", which will make the URL subdirectory structure human-readable

### 2.0 Templates

In this section we are going to use a plugin called `Starter Templates` to give us a working site to iterate on. However, first it is useful to understand how a wordpress page is composed.

Pages are visually composed of themes and content (blocks)

![](res/blank-theme-blocks.png)

The website's theme defines the colors, fonts and layouts. 
- Themes have some styling out-of-the-box and can then be further customized using the customize option.
- The theme implments a consistent visual framework across pages, i.e., header and footer that appear on all or most pages, 
  - Today, it is popular to find a lightweight theme which implements this and little more
- Suggestions:
  - Astra
  - GeneratePress
  - WPOcean
- A major benefit of a theme is when new pages are added by the client, they will automatically have these styles added
- You can also turn off elements for certain pages, such as the Landing page

We will automatically get the Astra theme when we use `Starter Templates`.

Let's install the `Starter Templates` plugin. This plugin attempts to create several sample pages in your block editor of choice, between Elementor, Beaver Builder and Gutenberg. We're going to use Gutenberg, this is the default block editor for wordpress, and seems to be the best performing.

Starter Templates

Let's install and activate the `starter templates` plugin...

![](res/starter-templates.png)

Browser the library...

![](res/starter-templates-library.png)

The templates have been created using a number of page builders. We will work with the Gutenberg editor.

![](res/gutenberg-templates.png)

Let's use the mountain template. It will give us a rough starting point for our site, and is much easier than starting from a blank canvas.

![](res/import-mountain.png)

Let's import the complete site, to give us several starting pages, as well as sample content. The plugin will automatically download some plugins to ensure the site looks and acts as intended.

![](res/install-extras.png)

![](res/skip.png)

To actually fill our page, we need some content

There are three types of content in wordpress: Post, Pages and Media
- Posts are dynamic - update with more blog entries, typically newest at the top
- Pages are static - set it and forget it
- Media - saved separately in a database, but typically also embedded on to pages. Can be uploaded once and reused multiple times.

Unfortunately our selected theme does not include a blog page by default, but we can create one.

### 3.0 Page Builders

Page Builders are applications built on top of Wordpress which allow users to generate pages by composing them of a number of nested blocks. The Wordpress Gutenberg Blocks editor is an example of this, but there are also commercially available open source editors such as Elementor and Beaver Builder. Generally the more powerful, flexible and easy to use the editor, the more bloated the output reducing performance. For these reasons, we will use the best performing Gutenberg editor, even if some things are slightly more tedious to us as users, and even impossible without custom code.

### 4.0 Home Page

Let's edit the homepage with Gutenberg.

First we will implement the home page. Let's break down a set of Gutenberg blocks which could comprise this layout...

![](res/mockup-to-blocks.png)

Steps

1. Change the Cover background to the Hyrule image

![](res/cover.png)

Pop up tools appear...

![](res/pop-up-tools.png)

These will vary depend on context of the block which is selected.

Click on the kebab menu and `Remove Block`.

You can change the image with

Pop-up -> Replace -> Upload

The inspector on the right will change depending on the context of the selected block. Here you can set properties

Inspector -> Block 

![](res/inspector.png)

Let's squish down the image in

Inspector -> Block -> Dimensions -> 400 px

Note, you can also set properties for the Page for this menu as well, which is how you can constrain content and turn on or off headers or footers.

![](res/page-settings.png)

We may need to come back to this one in a bit, but for now this should be good for our page.

Remember to frequently save with update, and preview your page in a new tab.

![](res/update-and-preview.png)

![](res/first-change.png)

2. Lets add a text and image block...
   
![](res/add-block.png)

![](res/browse-all.png)

![](res/add-blocks.png)

Let's add a column

![](res/add-columns.png)

![](res/cols.png)

This will allow two areas to drag and drop items.

On the left, we will drag in an icon, on the right some paragraphs. Copy the text from XD

To make the bow icon reasonably sized...
Inspector -> Block -> Image Dimensions -> 50 x 50

Also, center it by selecting the image
Pop-up tools -> Change Alignment -> Align center

And in the column

Pop-up tools -> Change Vertical Alignment -> Align Middle

You can also scale up the title of the text in

Text -> Inspector -> Typography -> Medium

Save and inspect

![](res/image-and-text.png)

In your preview, see how this looks on mobile...

![](res/mobile-preview.png)

Let's take a break from the block editor and hop into the Astra editor to set up our header and footer.

4. Changing our header logo and menu

![](res/customize-theme.png)


![](res/change-header-logo.png)

5. Changing our footer using the Astra footer builder

Changing our footer is a little bit more complicated. We need to use the theme's footer customizer. We likely won't get quite to the point we want to, but that's okay...

You can see the actual footer, as well as the blocks which make it below


![](res/footer-builder.png)

![](res/footer-builder-widgets.png)

We have three tasks: update the copyright, add the 'social media' icons, and update some colors...

First, we'll clean up the second row. Remove all widgets and collapse to one column

![](res/cols-footer.png)

![](res/footer-bg.png)

Do the same for the bottom with color: #206A5D

Fix our copyright, editing the text and setting the color to white and center it

![](res/change-copyright-text.png)

![](res/text-color.png)

We'll add an HTML element in the second row, and update the image

![](res/footer-html.png)

![](res/footer-social.png)

By editing the HTML, we could easily add some links to the images, but we won't worry about this for now.

Reminder - [add link to image.](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_image)

** Hit publish to update! **

![](res/publish-footer.png)


6. Contact form

Let's finish the landing page off with a contact form:

Go back to editing the page, and remove the remaining gallery stuff from our template page.

Start with a `group` block which allows us to add a background color

Group -> Inspector -> Block -> Background Color -> #F1F1E8

Inside the group add a WPForms, 

We'll use a WPForms plugin, which was downloaded with the starter template. Set it to the contact form. We'll add some text above, and then edit the form from another area.

![](res/wpforms-contact.png)

![](res/edit-contact-form.png)

There's lots of cool things we can do here, but for now we'll simply set the form as we like.

![](res/check-box-1.png)

![](res/check-box-2.png)

Finally, ensure the email is set up properly.

![](res/admin-email.png))

We have a complete functional page. 

![](res/mobile-homepage.png)

In the next section we'll add a blog page.

### 5.0 Blog Page

We will use the blog feature to implement the locations page, with a post for each location. Let's set up the posts first...

![](res/new-post.png)

For each post add a title, text and a featured image.

![](res/blog-post.png)

Be sure to publish!

You can repeat this for a few locations...

Now to create the blog page which links to the others...

Create a new page, and set up a cover like before.

Set some Page settings, including:
- Hide Title
- No Sidebar
- Full Width / Stretched
- Transparent header Enabled

Publish. Everything look good?

We should fix that menu, what is with that "Take action" button?

We can edit our menu here...

![](res/menu.png)

Be sure to save menu!

We can also get rid of the "Take Action" Button in the header

Theme -> Customize -> Header Builder -> Remove the Button 

![](res/remove-button.png)

And 

![](res/remove-mobile-button.png)

*** Publish when done !!! ***

Preview. Are the menus fixed?

To format our blog posts, we'll use a plugin. Grab it here...

![](res/add-plugin.png)

![](res/gutenberg-blocks.png)

Install and activate

This is a hefty plugin ... we want to turn most of it off...

![](res/deactivate-all.png)

![](res/activate-post-grid.png)

Let's head back to the `locations` page, and add in our new "Post Grid" block

![](res/posts-grid.png)

Let's edit the block a bit...

![](res/format-posts.png)

Publish our changes.

Time to test - how does it look on both the mobile and desktop?

Hopefully this lab has helped you see how we can get a website that looks good, close to our vision (though usually not perfect without significant futzing), and still being able for other users to add to later on.

![](res/desktop-complete.png)
![](res/mobile-complete.png)
![](res/mobile-blogpost.png)

We didn't fix the non-transparent header which shows up on the blog posts - I'll leave that up to you.

### 6.0 Assignment

Your assignment is to get into the head of a prospective user by creating a 2-page blog site for a fictional persona, similar in scope to the pre-lab. Create a persona (no need to fill in all the details - major details only), or use one you have previously created, and include a site and blog snippets in keeping with their style.

Your site should include
- A consistent header across pages
- A consistent footer across pages
- Appropriate menu linking the pages, with both mobile and desktop variants
- A landing page with at least 3 sections
  - Each section should communicate an aspect of the persona's personality or interests
  - Example ideas: book quotes, song lyrics, recipes, photo galleries, pets, etc.
  - Each section should experiment with a different type of Gutenberg block
- A blog page with at least 3 entries
  - Each entry should be both summarized on the blog posts page, and be given their own individual page
- A contact form

- I'd recommend quickly prototyping in XD first, but don't get too frustrated when you can't exactly replicate your XD Design
- You may include elements and styling from templates, but obviously cannot simply submit a template! Use it is a starting point to add, modify or adapt, like we did in the lab.
- You can experiment with a different Page Builder if you would like, like Elementor or Beaver Builder, but expect a performance hit!
- You can grab some cc0 stock photos from: https://www.pexels.com/creative-commons-images/

### 7.0 Submission

Please submit a backup of your site from local.

[See this link for information:](https://localwp.com/help-docs/advanced/how-to-backup-a-local-site/)

---

## References

M. Rand-Hendriksen, [WordPress 5 Essential Training](https://www.lynda.com/WordPress-tutorials/WordPress-5-Essential-Training/651229-2.html?org=reginalibrary), Lynda from LinkedIn Learning, 2020

M. Rand-Hendriksen, [WordPress 5 Essential Training: Site Administration](https://www.lynda.com/WordPress-tutorials/WordPress-5-Essential-Training-Site-Administration/782148-2.html?org=reginalibrary), Lynda from LinkedIn Learning, 2019

## WordPress - Adam's Pet Peeves

- Freemium + Software As a Service on top of GPL software is a bizarre business model.

<details>
<summary>Warning, rant inside</summary>

  - Increasingly predatory pricing structures for free software
  - Trivial things are often gated behind 'pro licenses'
    - Plugins may contain DRM.
  - Affiliate programs means there are tons of thinly veiled adverts masquereding as tutorials, reviews, and comparisons, often published by the companies offering them.
  - Good actual free themes and plugins are hidden behind 'free' (freemium) ones.
  - The 'Software as a Service' business model forces users to subscribe rather than buy outright
  - Overall if feels like Freemium is contrary to the FOSS share-alike mindset of wordpress 
    - GPL derivitive works are required inherit the GPL license, premium plugins do so only in name not spirit
    - Technically they are only selling updates and support by subscription, once you buy it once you own it forever, sorta?!
    - I'm not saying developers don't deserve to get paid, they do, it just seems like too much contradictions.
    - Basically, SAAS and FOSS feel like they must always be at odds.
  
</details>

- In general, the overhead of wordpress makes it very slow. Optimizing wordpress is a worthwhile undertaking.
