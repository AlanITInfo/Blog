---
title: Change BookMark/TAB icon in your gatsby blog
date: "2021-04-02T18:20:37.121Z"
---

Working with the gatsby-starter-blog and one of the first things most people change is the profile picture from the dashing Mark Matthews but I also wanted to change BookMark/TAB Icon from the gatsby logo to my logo.

Gatsby Logo 
![Connectors](./GatsbyIcon.png)

My Logo
![Connectors](./Logo.png)

Method 1.

Change the gatsby-icon.png in /src/Images to your own image.

Method 2.

Add you own image to the images folder 
![Connectors](./srcimages.png)

Then find the gatsby-config.js file
![Connectors](./gatsbyconfig.png)

Look for Line 121 and change gatsby-icon.png to your image ie.. logo.png
![Connectors](./line121.png)

End Result

Hopefully if all has gone to plan, then your tab icon should change from this.
![Connectors](./CurrentTab.png)

To the one you want ie.. my logo. 
![Connectors](./NewTab.png)


