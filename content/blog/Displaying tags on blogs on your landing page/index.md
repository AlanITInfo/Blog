---
title: Displaying tags on blogs on your landing page
date: "2021-04-09T13:56:37.121Z"
description: "lets display our blog tags on the landing page just like we have setup on the blog entries."
tags: ["javascript", "gatsby"]
---

So this is a quick way of adding blog tags on the landing page which is built on a previous post "Displaying tags on posts"

So for this we need three lines of code,

![Connectors](./constTags.png)

![Connectors](./ImportTags.png)

![Connectors](./Listoftags.png)

We then need to head over to our stc/pages/index.js and put the following code into it.

Our first thing we need to do is update the pagequery section with tags.

![Connectors](./pagequery.png)

We now need to add the import tags commond to the top of the index.js

![Connectors](./importtagscomponents.png)

Add the const tags and the list of tags to your index.js

![Connectors](./ConstagsandTagsList.png)

At the end of the process you should now see tags next to your blog posts on the landing page.

![Connectors](./buttonsresult.png)
