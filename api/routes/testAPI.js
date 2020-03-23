require('dotenv').config();
var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) =>
{
    const Region = req.query.region;
    const SummonerName = req.query.name;

    const Summoner = {
        Name: SummonerName,
        Region: Region,
    };

    //console.log("RIOT_API_KEY Environment Var: " + process.env.RIOT_API_KEY);

    res.send(`Attempting to search for the summoner [${SummonerName}] in the region [${Region}].`);
});

module.exports = router;