# Api

## Available Scripts

First of all, if the project is going to be run by the local computer, it is neccessary to have mongodb installed and running. The process can be found here

https://docs.mongodb.com/manual/installation/


In the project directory, run:

### `npm install`

To install dependency packages.

### `npm run dev`

Runs the app in the development mode.

### `npm run build && node dist/index.js`

Builds the app production code and starts the server.


## Solution

The application allows browsing github repositories, either a user or organization, by interacting with Github API through the frontend and the backend. 

### Browsing Github repositories

The home page allows the user to input a Github username account, and the frontend sends a request to the backend from where another request is sent to the Github API. When the promise is resolved and the response is received, before it is sent back to the frontend, the backend checks if any of the obtained repositories are already stored in the database as favorite repositories, so it can add a property to each repositorie resource which is going to be deliver to the frontend in order to mark it as favorite. I decided to inplement this little tweak in the solution, instead of showing the index repositories in the frontend and then offer the possibility to check if is included as favorite.

### Adding or removing repo from favorites

If a repository from the list is not showed as favorite, the user can add it to favorites by clicking the star. In this moment, a request is made to the backend and while is being processed, the star button is disabled to prevent further requests until the previous one gets resolved. When the backend receives the request and before adding the repo to favorites, I decided to get the repo data from the Github API, to make sure it has not been modified. To achieve this, the backend sends a new request to the Github API to get the specific repo.

### Pagination

Another cool feature I implemented was the pagination. By default, Github limits the response to 30 records, and also there is a way to fetch a specific page, so I took advantage of this including the page number to the request and build a basic logic to navigate forward a backward in groups of 30.

### Favorites

The second view corresponds to the favorite repositories which has been added by the user, offering the possibility to remove them from the list and database. There is also a detail button (eye icon) which is a feature I could not complete due to the extend of the test.

### Docker

Run the following commands to pull the backend and frontend docker images

`docker pull mauvies/repo-zoom:backend`

`docker pull mauvies/repo-zoom:frontend`

Inside the project root folder -api- run the following command to build and start the containers

`docker-compose up -d`

Note: In the docker-compose-yml file, the frontend build path must point to the frontend repository location. For example, if the frontend repository is located at the same level as the api repository, then the build path should be `../repo-zoom-frontend`

### To do

The app is still missing important features such as testing and error handleling, which I have thought about how to implement it, but it woult take much more time. Another cool feature could be filters, since Github API already offers some of them.
