# League-of-API

## About the app
This is an application built upon ReactJS, while also using NodeJS for some backend operations.
The purpose of this application is to connect to the League of Legends API and retrieve data about individual Summoners.

Due to this application being a side-project, I will not be hosting this live on Heroku or Netlify, as I would have to regenerate the API key daily, which I don't have time for.

## Setting your Riot Games API Key
1. Head over to https://developer.riotgames.com/ and login with your League of Legends account.
2. Regenerate your API key, as it is most likely expired.
3. Navigate to the `api` directory, and create a new file named `.env`.
4. Within the new `.env` file, declare your API key as such `RIOT_API_KEY=<YOUR API KEY HERE>`.

## How to run the API
1. In your terminal, navigate to the `api` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app.

## How to run the Client
1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

## Check if they are connected
1. With the two apps running, open your browser in http://localhost:3000/.
2. If you see a webpage saying `Welcome to React`, it means the FrontEnd is working.
3. If the same webpage has the phrase `API is working properly`, it means the API is working.
4. Enjoy!