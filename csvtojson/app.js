const { error } = require("console");
const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");

const csvfilepath = "./restaurants_info.csv";

CSVToJSON()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json)
    FileSystem.writeFileSync("output.json",JSON.stringify(json),"utf-8",(err) => {

        if (err) console.log(err)

    })
});