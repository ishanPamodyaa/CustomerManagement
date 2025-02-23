loadCustomer();

function loadCustomer() {
  fetch("http://localhost:8080/customer/get-all")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let custData ="";  

      let custTable = document.getElementById("table-data");
      custTable.innerHTML = "";

      data.forEach((customer) => {
        console.log(customer.name);
        // let custData =document.createElement("tr");
        custData += `
        <tr>
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.address}</td>
        <td>${customer.salary}</td>
        </tr>
        `;
        
      });

      custTable.innerHTML = custData;

    });
}


function addCustomer(){
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let salary = document.getElementById("salary").value;

    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": name,
  "address": address,
  "salary": salary
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8080/customer/add", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

}
