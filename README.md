# ABN Search App

Goal of the app is:

1. To show ABN api data for any search text.
2. Clicking on search result item will get data for that particular ABN.
3. Entering an ABN in text search will return ABN data directly if it exists.

## Available Scripts

In the project directory, you should first run: `npm install`

To run the project

### `npm run start`

To run tests

### 'npm run test'

## Project template and external dependencies info

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- I have added Typescript, @testing-library/react, node-sass, prettier as development time dependencies
- I have added `jsonp` package instead of writing logic for handling the api.

## Task Status

- The basic functionality is working.
- I have not added react-router.
- I have not taken Caching into consideration.
- I have not taken into consideration/tested if a large data set is received - I was getting 10 results at a time, I did not test this scenario.
- I have not spent much time on CSS and copied some design CSS from Material-UI site. Enhancements on this can be like using css modules or styled-components etc. but not much time was spent on this.
- I could have spent more time on Error Handling as jsonp library has a large timeout for errors for some scenarios.
- I spent about 4 hours on this task and did some refactoring along the way, also added React Testing-Library.
- I havent written many tests but i think it is a good start.
