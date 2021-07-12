![REPO SIZE](https://img.shields.io/github/repo-size/Alexlloydwhite/react-movie-sagas.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/Alexlloydwhite/react-movie-sagas.svg?style=flat-square)

# Movies Saga

## Description

_Duration: Weekend Sprint_

This project solidified my understanding of redux-saga & reducers. Additionally I was able to greatly increase my knowledge of the React library.

I began the project with a database of movies. I displayed each movie poster on the DOM with an onClick to display details about the movie. I used params to allow the details page information to persist thru refreshing the browser. From here users are able to click an edit button, I used react-router-dom to direct the user to an edit page to edit details about the movie and post the updates to SQL. On the homepage, I created a search bar that allows users to search for a movie and see the results of the search in real time. There is conditional rendering and local state for search toggle. I built a form page whereby users are able to post new movies to the database, this required SQL joins as the movies and genres are kept in different tables.

My favorite part of this application is that has the ability to scale while retaining all base functionality. 

[Deployed version of app](https://vast-taiga-46649.herokuapp.com/). Please note that this is hosted on Heroku and will take a couple of minutes to "warm up".

## Screen Shot
Main View
<img width="1268" alt="Screen Shot 2021-05-16 at 5 15 26 PM" src="https://user-images.githubusercontent.com/77769682/118414532-be465100-b66a-11eb-9711-c2407968c5a8.png">
Details View
<img width="1170" alt="Screen Shot 2021-05-16 at 5 15 39 PM" src="https://user-images.githubusercontent.com/77769682/118414537-cbfbd680-b66a-11eb-988a-ed206c6cd919.png">

### Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1. Create a database named `saga_movies_weekend`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
This application has many views:

1. Home Page: displays movie posters and a search bar to search for movies by title.
2. Movie Details: When a user clicks on a movie poster, they are brought the a new page displaying details about the movie click.
3. Edit: In the movie details view, users are able to click the button 'EDIT MOVIE' which will bring the user to a new page where they are able to edit the movie title and description.
4. Add New Movie Form: displays a form for the user to add a new movie. Select genre then type title, url, and description
5. Admin Login: Admins are able to login and edit movie genres and other information. Page currently under construction :)

## Built With

- Javascript
    - React (Redux, Saga, Router-Dom, and Material UI)
    - Axios
    - Node.js
    - Express
- Postgresql
- HTML5

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [Alexllodywhite@gmail.com](www.google.com)
