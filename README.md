# ThreeByThree ReadMe


## Description

For my final GA project, I created a website that I have had the idea to make since I started the course. Occasionally within my friend group, we like to create what we call a “Three By Three”; a collage of pictures in a 3x3 grid that represent our top 9 favourite shows/songs/movies or whatnot. “Three By Three” is my attempt at automating that, rather than having to do it manually in some sort of art program. 

## Deployment link

[https://three-by-three.herokuapp.com/](https://three-by-three-e866e181d04b.herokuapp.com/)

Install the code, then run “npm run build” in the terminal in VS Code (or your editor of choice) to create a build folder, and then run “node server” and navigate to localhost:3000.

## Timeframe & Working Team (Solo/Pair/Group)

I was working on my own, and it took around 4 days to complete.

## Technologies Used

I used the MERN stack to write this program; that is, Mongoose/MongoDB, Express, React and Node.js.

## Brief

I was told to create a working full-stack app that meets or exceeds the below technical requirements, built by me, and hosted online (originally Heroku, but then switched to fly.io).

Your app must:

☐ A working full-stack, single-page application hosted on Heroku.

☐ Incorporate the technologies of the MERN-stack:

MongoDB/Mongoose
Express
React
Node

☐ Have a well-styled interactive front-end.

☐ Communicates with the Express backend via AJAX.

☐ Implement token-based authentication. Including the ability of a user to sign-up, log in & log out.

☐ Implement authorization by restricting CUD data functionality to authenticated users. Also, navigation should respond to the login status of the user.

☐ Have a well-scoped feature-set. Full-CRUD data operations are not required if one or more other features are included, for example:

Consume data from a third-party API.
Implement additional functionality if the user is an admin.
Implementation of a highly dynamic UI or data visualization.
Other, instructor approved, complexity/features.

## Planning

The models ended up being even simpler, with only the user and threebythree schemas, but the “rating” field needed to be linked to the user so that it wouldn’t be duplicated if the user rated multiple times. My original intent was to store any media that has been used before to make searching quicker, but I found that using the API is almost always going to be easier.

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/10e85026-3034-474d-90f8-2c7ed0731b52)


Originally I thought filling in the grid would be difficult, so I planned for a separate search bar for each individual tile. I had plans for a “tooltip” but I instead opted for a simple “show titles” button that shows the title, since other information wasn’t too important.

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/f33f6004-693a-4a5b-a873-d640a0c0d56f)
![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/3fc2cff5-857b-453e-bee1-1b3e4f349db9)


The planning for this project was fairly simple, since I was only trying to solve one problem. But as you’ll see later on, I didn’t really have a clear vision as to how I was going to solve that problem, and I was hoping that the interactivity of the website would be enough to showcase my skills.

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/354bd0e2-0957-4e26-ac14-b6f0eeaad659)


## Build/Code Process

This code was built on a “MERN Infrastructure” base that General Assembly helped us with, and it included an authentication component.

The first thing I needed to do was figure out what API to use, and how to get it to work. At the time of creating the project, any Film and TV APIs I could find were unavailable for whatever reason (behind a paywall, server down etc.). The only API I ended up being able to work with was the MyAnimeList (a large database for anime) API, and that, too, was through a scraper called “Jikan”, which had a wrapper called “Jikan4.js”. This wrapper was having some errors that seemed unresolvable, so I did the only thing I could think to do; contact the developer. I spoke with them about the error, and after some discussions, they resolved it!
(I am the happy face, they are the aviator)

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/ab48325a-53bf-4119-bd16-7029bb6ff636)

Thanks to this, I was able to work with the wrapper, which essentially made it much easier to grab information from MyAnimeList.

After this, I was able to get started on the main page for my website; the create page. I first attempted to create a 3x3 Grid, and a box where I could search for anime.

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/31142fb1-56d0-4c91-9022-40ee211eca7d)


Each ImageBox contained the following code, which contains a state that is necessary later on (setAnime):

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/2136fb46-377b-453c-989e-e63c9c034c4b)


This was the closest I could get to a “responsive” grid, though it does break down at certain sizes. 
Then, the search functionality needed to be implemented. The Search box itself was a simple form that sends the inputted query into a separate component:

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/27250b49-3259-4b15-8424-ddd74330c4b3)

That “AnimeQuery” component then makes an API call, and displays the first 5 returned results:

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/dfe0ae31-6d00-4c51-851f-110ca4a94afd)

“Anime” is a Badge component that sets the “selectedAnime” state to whatever is inside the badge:

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/3099e81f-5eaa-469e-bf31-51573e51c573)


The way that I ended up having my create page work was by setting this state, and then, whenever an “ImageBox” in the grid is clicked, update the “anime” state of the clicked component using the information in “selectedAnime”.
Using these components, the Create Page looks like this:

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/27bf0c92-45d0-4eaa-a021-7e456d52008a)


Clicking an “Anime” component (one of the badges on the right) highlights it to show that it is in the current “selectedAnime” state. Then, clicking on an “ImageBox” (in this case, the middle one) will update the state to contain the current title of the anime, and, more importantly, the image associated with it (as received in the “AnimeQuery” component).

Filling every box and then typing in a title enables the “Save” button at the bottom:

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/fe88d00e-f21f-44cd-a9e5-bce346e24e63)

Pressing this refreshes the page and clears the 3x3, as well as saving the 3x3 under your username.

After this save functionality was implemented, I was able to move on to the Home page. This was fairly straightforward, though it did involve reusing the “ImageBox”s to recreate the grids.

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/7078000c-8c90-4642-84af-596973f2941c)
![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/6dd0d50c-ca30-4f68-915a-ae1768caa050)


 “ThreeByThree” here being a component that just recreates the grid that was in “Create Page”, as well as appending a Title and Rating to the beginning. 



The rating component is a state that updates the rating of the 3x3 by appending the rating and the user to it, so as to disallow the same user to rate the same thing multiple times. It then calculates the average rating of all of the users, and displays it. 

![image](https://github.com/Turq-uoise/three-by-three/assets/107884520/8475d286-6ab5-4fde-8d56-fba19c12367f)


## Challenges
Figuring out how to actually update the state of the “ImageBox” was definitely the most difficult problem for me. It involved many steps that were unclear until I actually started taking them, and required a bit of a deeper understanding of the API, too. 

On top of this, getting the grid to actually look like a grid and be somewhat responsive was quite difficult, though I got to a decent result in the end.

## Wins
As shown above, the use of multiple states to grab the “Anime”, and then update the “ImageBox” ended up being an elegant and effective method, and compared to my planning wireframe, was a much better look.


## Key Learnings/Takeaways

I learned that APIs are powerful, but also finicky. They can have bugs that would be unresolvable on your own end, so it’s important to be careful with their use. 

I’ve come away from this with an appreciation for the ease of use of React, and looking forward to working with it more in the future.

## Bugs
The site occasionally crashes. I’m not sure what causes it exactly, but it seems to occur when you update a rating and then load/reload the Home page (sometimes it occurs without the former factor, and just a reload is enough to crash it). The errors say it is something to do with “fetching”, which makes me think it is API related, but nothing that I can see points to the Home page having anything to do with the API.

## Future Improvement
- Being able to use and switch between multiple APIs for Films and TV would be nice. 
- Being able to pick from multiple images for each anime picked would make for a good user experience, as well as being able to upload your own image (though at this time, the API only provides one image).
- Being able to set your 3x3 to public or private, and therefore being able to share a direct link to your 3x3 would make for good UX.
- Being able to view all the 3x3s by a certain user on their page would be a good improvement.




