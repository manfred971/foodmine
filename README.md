##Lessons
1.Introductions to the course 
2.Install development tools
3.Create angular app
  1.Create project folder
  2.Install @angular/cli
  3.Create App as frontend
 4.Add Header 
  1.generate Header 
  2.add Html 
  3.add css
5. List Foods
  1. Create Food model
  2. Create data.ts
       1. Add sample foods
  3. Add images to assets // need to made some modifification in angular.json to chamge the path of the assets folder to load image.
   '"assets": [
  "src/assets",
  "src/favicon.ico"
]'
  4. Create Food service
  5. Create Home component
      1. Add ts
      2. Add html
      3. Add css 


6.Search
    1.Add method to Food service
    2.Add search route
    3.Show search result in Home component
    4.Generate search component
        1.Add to home component
        2.Add ts
        3.Add html
        4.Add css


7.Tags Bar

    1.Create Tag model
    2.Add sample tags to data.ts
    3.Food service
        1.Add get all tags method
        2.Add get all foods by tag method
    4.Add tags route
    5.Show tag result in Home component
    6.Generate Tags component
        1.Add to home component
        2.Add ts
        3.Add html
        4.Add css




8.Food Page

    1.Add method to food service
    2.Generate Food Page component
        Add Route
        Add ts
        Add html
        Add css



9.Cart Page

    1.Create CartItem Model
    2.Create Cart Model
    3.Generate Cart service
    4.Add to Cart Button in Food Page
    5.Generate Cart page component
        1.Add Route
        2.Add ts
        3.Add html
        4.Add css


10. Not Found!

    Generate Component
        Add ts
        Add html
        Add css
    Add To Pages
        Home Page
        Food Page
         Cart Page



11. Connect To Backend

    Create backend folder
    npm init
    npm install typescript
    Create tsconfig.json
    Create .gitignore
    Copy data.ts to backend/src
    npm install express cors
    Create server.ts
        install @types
        Add Apis
    npm install nodemon ts-node --save-dev
    Add urs.ts to frontend
    Add HttpClient module
    Update food service
12. Login Page
    1.  Generate Component
        1.  Add to routes
        2.  Add ts 
        3.  Add html
            1.  Import Reactive Forms Module
        4.  Add Css
    2.  Add Login ApiAdd commentMore actions
        1.  Use json
        2.  Add jsonwebtoken
        3.  Test Using Postman
    3.  Part 2 ...



