This project is a Node.js and MongoDB-based application that tracks cryptocurrency data for Bitcoin, Matic, and Ethereum. The application retrieves real-time data from the CoinGecko API and stores it in a MongoDB database. It also provides APIs to query the latest data and calculate the standard deviation of the prices over the last 100 records.

Features
⭐Background Job: Every 2 hours, the application fetches the latest price, market cap, and 24-hour price change of Bitcoin, Matic, and Ethereum from the CoinGecko API.
⭐/stats API: Allows users to get the latest price, market cap, and 24-hour change of a requested cryptocurrency.
⭐/deviation API: Calculates and returns the standard deviation of the price of a requested cryptocurrency over the last 100 records stored in the database.
⭐MongoDB Integration: The data is stored in a MongoDB database, which you can connect to using a service like MongoDB Atlas.


Technologies Used
⭐Node.js: Backend runtime environment.
⭐Express.js: Web framework for building APIs.
⭐MongoDB: NoSQL database for storing cryptocurrency data.
⭐CoinGecko API: Source for real-time cryptocurrency data.
⭐Mongoose: ODM for interacting with MongoDB.
⭐Cron Jobs: To fetch data every 2 hours.
