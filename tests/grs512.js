let { utils } = require("../build")
console.log(utils.Hash.grs512d(Buffer.from("Hello","utf8")))
console.log(utils.Hash.sha256("Hello"))