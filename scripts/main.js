// const config = require("../checkoutlist.json");
// let m = config.length
// let i=0;
//
// while (i < m){
//     console.log(config[i].id , config[i].price)
//
//     i++}
//

// JSON object
var jsonData = {
    "employees": [
        {"name": "John Doe", "email": "john.doe@example.com", "age": 35},
        {"name": "Jane Smith", "email": "jane.smith@example.com", "age": 28},
        {"name": "Bob Johnson", "email": "bob.johnson@example.com", "age": 42}
    ]
};

// Get the container element for the table
var container = document.getElementById("table-container");

// Create the table element
var table = document.createElement("table");

// Create the table header row
var headerRow = document.createElement("tr");
Object.keys(jsonData.employees[0]).forEach(function(key) {
    var headerCell = document.createElement("th");
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
});
table.appendChild(headerRow);

// Create the table body rows
jsonData.employees.forEach(function(employee) {
    var bodyRow = document.createElement("tr");
    Object.values(employee).forEach(function(value) {
        var bodyCell = document.createElement("td");
        bodyCell.textContent = value;
        bodyRow.appendChild(bodyCell);
    });
    table.appendChild(bodyRow);
});

// Add the table to the container
container.appendChild(table);

//
// const config = require("../checkoutlist.json");
//
// // get a reference to the table element in your HTML
// //const table = document.querySelector("#myTable");
//
// // create a header row
// const headerRow = table.insertRow();
// const idHeader = headerRow.insertCell();
// idHeader.innerText = "ID";
// const priceHeader = headerRow.insertCell();
// priceHeader.innerText = "Price";
//
// // loop through the config data and create a row for each item
// config.forEach(item => {
//     const row = table.insertRow();
//     const idCell = row.insertCell();
//     idCell.innerText = item.id;
//     const priceCell = row.insertCell();
//     priceCell.innerText = item.price;
// });
//
//






// import React, { Component } from 'scripts/react';
//
// class Table extends Component {
//     render() {
//         const { data } = this.props;
//
//         return (
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {data.map((item, index) => (
//                     <tr key={index}>
//                         <td>{item.name}</td>
//                         <td>{item.email}</td>
//                         <td>{item.phone}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         );
//     }
// }
//
// export default Table;
