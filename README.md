# A 'Most Popular' News API  
A basic news app created with JavaScript, React Router, and the New York Times 'Most Popular' API.  

## Description 
A news app that populates with the 'most popular' (aka most viewed) stories on nytimes.com. My app features a dashboard that automatically populates the most viewed stories into a simple grid. This website filters from a large dataset to present the top 6 stories online right now. It also includes a hamburger menu which gives the app more of a news website feel and could allow for additional API or other external database features down the road. 

## Why I choose this project
I'm now midway through my Software Engineering course at General Assembly, and I wanted to work with an API that was both large and constantly changing. I choose the New York Times' API because it fullfills both of those requirements. It's also well-documented. 

I also wanted this to be a starting point. Eventually, I would like to add additional features like "search" and RSS feeds that improve the app's overall user experience. 

## What I learned
I learned how to work with complex and large databases and render them in React. I now have a really good understanding of how to approach projects like this one and how small UI elements like a hamburger menu can make a website easy to navigate. 

The NYT API is very roubust but often imcomplete. Datasets are occasionally missing components like media assets or tags. This allowed me to consider ways of building a default mode that I can rely on to populate my app when the data is incomplete. 

## Getting started
The first step was creating a static app that had UI functionality. React Router is still new to me, so I had to figure out a way isolate React components and get them to work in tandem. I found that I often preferred to build a component first in the App.js file then move it to its own component page once I was sure it worked. 

### Building a minimum viable product
As a software engineering student, I'm working quickly and learning a lot on the fly. 

#### Hamburger Menu
Setting out, I decided that I needed build a very basic website that had a hamburger menu and grid-style homepage. One of the first chanllenges was creating a hamburger menu that transitioned the way I needed it to. I had never built a hamburger menu, but I learned quickly how to build a sliding menu in CSS. I managed to do this by studying other websites that did this and working through sandbox tutorials online. The end result is a menu deploys a simple animation effect of sliding open. When open the hamburger menu transforms into a "X". I'm happy with how clean and effective this looks. 

#### Inconsistent Data
Once I built a static website, I need to fetch the 'top stories' API. I quickly learned that my website would break if even one dataset was missing a media asset. In order to  
