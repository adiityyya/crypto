import cron from "node-cron";
import axios from "axios";
import Crypto from "../models/crypto.model";

const COINGECKO_API = "https://api.coingecko.com/api/v3/simple/price";
const coins = ["bitcoin", "matic-network", "ethereum"];

const fetchCryptoData = async () => {
    try {
        const response = await axios.get(COINGECKO_API, {
            params: {
                ids: coins.join(","),
                vs_currencies: "usd",
                include_market_cap: "true",
                include_24hr_change: "true",
            },
        });

        const data = response.data;

        for (const coin of coins) {
            const record = new Crypto({
                coin,
                price: data[coin].usd,
                marketCap: data[coin].usd_market_cap,
                change24h: data[coin].usd_24h_change,
            });
            await record.save();
        }

        console.log("Crypto data fetched and stored successfully.");
    } catch (error) {
        console.error("Error fetching crypto data:", error.message);
    }
};

cron.schedule("0 */2 * * *", fetchCryptoData);

export default fetchCryptoData;
