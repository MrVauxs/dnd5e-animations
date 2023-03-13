var fs = require('fs');

fs.readFile("module/autorec.json", function (err, data) {
    if (err) {
        console.log("Error: " + err);
        process.exit(1);
    }

    var json = JSON.parse(data);
    if (json.length == 0) {
        console.error("Error: autorec.json is empty?!");
        process.exit(1);
    }

    let passed = true;
    const wildcards = [];
    Object.keys(json).forEach(function (key) {
        const array = json[key];
        if (Array.isArray(array)) {
            array.filter(function (item) {
                if (item.metaData == null || Object.keys(item.metaData).length == 0) {
                    passed = false
                    console.error("Error: autorec.json contains an entry without metaData: " + item.label + ", id: " + item.id);
                } else if (item.metaData.name !== "5e Animations" || isNaN(item.metaData.version)) {
                    passed = false
                    console.error("Error: autorec.json contains an entry with wrong metaData: " + item.label + ", id: " + item.id);
                }

                Object.keys(item).forEach(function (itemKey) {
                    if (item[itemKey]?.sound?.file?.includes("modules/dnd5e-animations")) {
                        const path = item[itemKey].sound.file.replace("modules/dnd5e-animations", ".")

                        if (path.includes("*")) {
                            wildcards.push("Skipping wildcard path on " + item.label + ": " + path)
                        } else if (!fs.existsSync(path)) {
                            passed = false
                            console.error("\nError: autorec.json contains an entry with a sound file that doesn't exist: " + item.label + ", id: " + item.id + "\nPath: " + path)
                        }
                    }
                });
            });
        }
    });

    console.log("\n" + wildcards.join("\n"))

    if (passed) {
        console.log("RESULT: autorec.json is valid.")
        process.exit(0)
    } else {
        console.log("\n\n\nRESULT: autorec.json is invalid.")
        process.exit(1)
    }
})