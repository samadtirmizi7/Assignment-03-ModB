



let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]


//   




function displayMobiles(array) {
    // Create a container div
    let container = document.createElement("div");

    // Loop through the array
    array.forEach(item => {
        // Create a list for each phone
        let phoneList = document.createElement("ul");

        // Loop through the properties of each phone
        for (let key in item) {
            let listItem = document.createElement("li");
            listItem.textContent = `${key}: ${item[key]}`;
            phoneList.appendChild(listItem);
        }

        // Add some spacing between phone lists
        phoneList.style.marginBottom = "20px";

        // Append the phone list to the container
        container.appendChild(phoneList);
    });

    // Append the container to the body of the document
    document.body.appendChild(container);
}


function SamMob() {
    let filterOption = document.getElementById("filterOption").value;
    let filterValue = document.getElementById("filterValue").value.toLowerCase();

    let SamMob = arr.filter(item => {
        return item[filterOption].toLowerCase().includes(filterValue);
    });

    document.body.innerHTML = "";

    displayMobiles(SamMob);
}

displayMobiles(arr)













