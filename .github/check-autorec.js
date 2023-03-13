var fs = require('fs');
var core = require('@actions/core');

fs.readFile("module/autorec.json", function (err, data) {
    if (err) {
        console.log("Error: " + err);
        process.exit(1);
    }
    var json = JSON.parse(data);
    if (json.length == 0) {
        core.error("Error: autorec.json is empty?!");
        process.exit(1);
    }

    let passed = true;
    Object.keys(json).forEach(function (key) {
        const array = json[key];
        if (Array.isArray(array)) {
            array.filter(function (item) {
                if (item.metaData == null || Object.keys(item.metaData).length == 0) {
                    passed = false
                    core.error("Error: autorec.json contains an entry without metaData: " + item.label + ", id: " + item.id);
                } else if (item.metaData.name !== "5e Animations" || isNaN(item.metaData.version)) {
                    passed = false
                    core.error("Error: autorec.json contains an entry with wrong metaData: " + item.label + ", id: " + item.id);
                }
            });
        }
    });

    if (passed) {
        console.log("autorec.json is valid.")
    } else {
        core.setFailed("autorec.json is invalid.")
    }

    process.exit(0);
})