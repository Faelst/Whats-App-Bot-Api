require('dotenv').config()
!process.env.ONLY_API_RUN && require("./src/MainBot.js")
!process.env.ONLY_BOT_RUN && require("./src/api/app")()