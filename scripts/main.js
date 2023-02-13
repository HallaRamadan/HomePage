




let products = [
    {
        "name": "Apples",
        "price": "2",
        "amount": "10",

    },
    {
        "name": "Melons",
        "price": "10",
        "amount": "1",
    }
]





var myArray    = [];
myArray[0] = products[0];
myArray[1] = products[1];



var myTable= "<table><tr><td style='width: 100px; color: red;'>Name</td>";
myTable+= "<td style='width: 100px; color: red; text-align: right;'>Price</td>";
myTable+="<td style='width: 100px; color: red; text-align: right;'>Amount</td>";
myTable+="<td style='width: 150px; color: red; text-align: right;'>Amount to pay</td>";
myTable+="<td style='width: 100px; color: red; text-align: right;'>Total</td></tr>";

myTable+="<tr><td style='width: 100px;                   '>---------------</td>";
myTable+="<td     style='width: 100px; text-align: right;'>---------------</td>";
myTable+="<td     style='width: 100px; text-align: right;'>---------------</td>";
myTable+="<td     style='width: 100px; text-align: right;'>------------------------</td>";
myTable+="<td     style='width: 100px; text-align: right;'>---------------</td></tr>";

var total =0;

for(let i=0; i<2; i++){
     total +=  myArray[i].price*myArray[i].amount

}
for (let i=0; i<2; i++) {
    myTable+="<tr><td style='width: 100px;'>" + myArray[i].name + "</td>";
    myTable+="<td style='width: 100px; text-align: right;'>" + myArray[i].price + "</td>";
    myTable+="<td style='width: 100px; text-align: right;'>" + myArray[i].amount+ "</td>";
    myTable+="<td style='width: 100px; text-align: right;'>" + myArray[i].price*myArray[i].amount + "</td>";
    myTable+="<td style='width: 100px; text-align: right;'></td></tr>";
}
myTable+="<tr><td style='width: 100px;'>" + "</td>";
myTable+="<td style='width: 100px; text-align: right;'>" +  "</td>";
myTable+="<td style='width: 100px; text-align: right;'>" + "</td>";
myTable+="<td style='width: 100px; text-align: right;'>" +  "</td>";
myTable+="<td style='width: 100px; text-align: right;'>"+total+"</td></tr>";



myTable+="</table>";

document.write( myTable);




