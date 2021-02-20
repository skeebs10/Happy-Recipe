# Happy Recipe

My goal is to create an app where you can search by ingredient to find a recipe you can make at home. Often times you have ingredients laying around your home with no idea what to make. This app is helpful in providing direction for a healthy, cost effective alternative to eating out. Save money while staying entertained!

I work in a food/houswares company and thought this app would be a fun way to showcase and explore my passion for culinary. Create a recipe and publish it on the website! This plaftorm can help any cook share their work of art with the world and can be a fun way to connect/network within industry. 

HAPPY RECIPE!


# WireFrames
I have drafted up my wireframes in drawio. I have created a Home, Create Recipe, and Recipe page. The green mood is a trendy scheme that represents heath. Below is a link:
https://drive.google.com/file/d/18pFYP4njZ9Io_JgprJR080sA-Z02ifoB/view?usp=sharing

## Technologies Used
HTML
SCSS
REACT
MONGODB 
EXPRESS
MATERIAL UI

**Components**
-Buttons
-createUpdateRecipe
-Form
-NavBar


**Pages**
-Home
-CreateRecipe
-Recipe

I started in the front end and then focused on back end. Pulled from a third party API for an additional feature. 
**CRUD**
In the recipe.js file is where I got all the recipes and api search for each ingredient. This app allows the user to create a new recipe to push into the array of recipes, update, and delete as well. 

## Axios
Used Axios module to make API calls server side to any URL.

**Deploy for production script**
Deployed on Heroku
https://github.com/skeebs10/Happy-Recipe


### BIG WIN ####
I installedv Material-UI and applied it for the first time! It was fun learning new features and will definitely be using this for my future apps to create the best UX experience.

### BIGGEST STRUGGLES

My original API from recipepuppy.com was working till I tried deploying to Heroku. I had to revist and find a new api because of restriction issues. New api found at  https://developer.edamam.com/edamam-docs-recipe-api  

"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free" 

Another issue is that there is a lot of room for improvement with the input search. Because of the api I used, my search ingredient is case sensitive and the search needs to match exactly to the recipes in the array. 


# Happy-Recipe
