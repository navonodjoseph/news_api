# A 'Most Viewed' News API  
A basic news app created with JavaScript, React Router, and the New York Times 'Most Viewed' API.  

## Description 
A news app that populates with the most viewed stories on nytimes.com. My app features a dashboard that automatically populates the most viewed stories into a simple grid. This website filters from a large dataset to present the top 6 stories online right now. It also includes a hamburger menu which gives the app more of a news website feel and could allow for additional API or other external database features down the road. 

## Why I picked this project
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
Once I built a static website, I need to fetch the 'top stories' API. I learned my website would break if even one dataset was missing a media asset. To solve this, I build a 'default mode' using a ternary operator that displays a preloaded image in the event the dataset does not include a media asset. 

```
 <div className="card">
                {title}
                {media && media[0] && media[0]['media-metadata'] && 
                <ImageFormat 
                className={media} 
                component="img" 
                src={media[0]['media-metadata'][2]?.url 
                ? `${media[0]['media-metadata'][2].url}` 
                : 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Red_Exclamation_Dot.png'
                    }
                />    
            }
```
#### Managing data
The top stories API is a database with the top 20 most viewed stories online. That was simply too much to display on my website. I felt that the app was best when it was limited to a smaller number of stories. Because I had a good sense of what the data looked like, I was able to filter the dataset down to a smaller number. Now the website includes a featured story ('leading article') and then a grid containing the next six most popular stories. 

### Next steps
There is still a lot of potential for this project. Here's where I could take this next: 
* A search feature that would let you search the NYT database. 
* NYT's very large RSS library to build out pages that fetches all stories related to a single topic like soccer or finance. 
* Using Axios 
