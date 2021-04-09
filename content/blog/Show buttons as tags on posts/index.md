---
title: Show buttons as tags on posts
date: "2021-04-09T11:13:37.121Z"
description: "So you have tags dispalying on your posts showing as word text but how about if they looked like buttons this blog shows you how."
tags: ["javascript", "gatsby"]
---

So the buttons used in this example are from reactstrap 

([https://reactstrap.github.io/](https://reactstrap.github.io/components/buttons/))

You will need to install two compoents to make them available for use in your gatbsy blog

bootstrap 
![Connectors](./Bootstrap.png)

react-bootstrap
![Connectors](./reactstrap.png)

Next head over to gatsby-browser.js and put the following code in. import "bootstrap/dist/css/bootstrap.min.css"
![Connectors](./bootstrapmincss.png)

You have now sucessfully setup bootstrap in your gatsby blog, now lets use to change tags.

Head over to src/components/tags.js and insert the following code.

![Connectors](./command1.png)

and

![Connectors](./command2.png)

Your tags.js should look the ones below.

![Connectors](./tags.png)

And you should now have the following at the bottom of your posts

![Connectors](./Result.png)

You can further modifying this by changing the tags.js file to remove the "blog tags" starter or the , between the tags if needed.







