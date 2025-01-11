This project is a Node.js and MongoDB-based application that tracks cryptocurrency data for Bitcoin, Matic, and Ethereum. It fetches real-time data from the CoinGecko API every 2 hours and stores it in MongoDB. The app also provides APIs to query the latest data and calculate the standard deviation of prices over the last 100 records.

### Features
- **Background Job**: Fetches the latest price, market cap, and 24-hour price change of Bitcoin, Matic, and Ethereum every 2 hours.
- **/stats API**: Retrieves the latest price, market cap, and 24-hour change of a requested cryptocurrency.
- **/deviation API**: Returns the standard deviation of a cryptocurrency’s price over the last 100 records stored in the database.
- **MongoDB Integration**: Uses MongoDB (via MongoDB Atlas) to store cryptocurrency data.

### Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing cryptocurrency data.
- **CoinGecko API**: Provides real-time cryptocurrency data.
- **Mongoose**: ODM for interacting with MongoDB.
- **Cron Jobs**: Scheduled tasks to fetch data every 2 hours.
