document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                const idValue = item.id;
                const isEven = idValue % 2 === 0;

                if (isEven) {
                    //console.log("Id is Even so Check below details:");
                    console.log("Name:", item.name);
                    console.log("Username:", item.username);
                    console.log("Email:", item.email+"\n"+" ");
                } else {
                    console.log("I'm Odd"+"\n"+" ");
                }

                const address = item.address || {};
                for (const [key, value] of Object.entries(address)) {
                    if (Array.isArray(value)) {
                        console.log(`${key}:`);
                        for (const element of value) {
                            console.log(`  - ${element}`);
                        }
                    } else if (typeof value === 'object') {
                        console.log(`${key}:`);
                        for (const [nestedKey, nestedValue] of Object.entries(value)) {
                            console.log(`  ${nestedKey}: ${nestedValue}`);
                        }
                    } else {
                        console.log(`${key}: ${value}`);
                    }
                }
                if (item.email.endsWith(".biz")) {
                    console.log("\nName with .biz email: ", item.name+", "+ item.email);
                }

                const city = item.address.city;
                if (["Aliyaview", "Howemouth", "Gwenborough"].includes(city)) {
                    const zipcode = item.address.zipcode;
                    const geo = item.address.geo;
                    console.log(`\nThe Zipcode and Geo of cityname ${city} is: ${zipcode} and Geo with lat and lang values: ${geo.lat}, ${geo.lng}`);
                }

                const catchPhrase = item.company.catchPhrase.slice(0, 15);
                console.log("\nCatchPhrase:", catchPhrase);

                console.log("=".repeat(50));  // Separator between items
            }
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });
});

