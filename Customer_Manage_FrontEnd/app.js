function loadCustomer() {
  fetch("http://localhost:8080/customer/get-all")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let custData = "";

      let custTable = document.getElementById("table-data");
      custTable.innerHTML = "";

      data.forEach((customer) => {
        console.log(customer.name);
        // let custData =document.createElement("tr");
        custData += `
        <tr class="text-center">
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

function addCustomer() {
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let salary = document.getElementById("salary").value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: name,
    address: address,
    salary: salary,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  let model = document.getElementById("addModel");
  let modelInstance = bootstrap.Modal.getInstance(model);
  modelInstance.hide();
}



function searchCustomerById() {
  console.log(" id enterd");

  let customerId = document.getElementById("search-id").value;
  console.log(customerId);

  fetch("http://localhost:8080/customer/search-by-id/" + customerId)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // document.getElementById("delete-id").value = data.id;
      document.getElementById("search-name").value = data.name;
      document.getElementById("search-address").value = data.address;
      document.getElementById("search-salary").value = data.salary;
    });
}

function searchCustomerForDelete() {
  console.log(" id enterd");

  let customerId = document.getElementById("delete-id").value;
  console.log(customerId);

  fetch("http://localhost:8080/customer/search-by-id/" + customerId)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // document.getElementById("delete-id").value = data.id;
      document.getElementById("delete-name").value = data.name;
      document.getElementById("delete-address").value = data.address;
      document.getElementById("delete-salary").value = data.salary;
    });
}

function searchCustomerForUpdate() {
  console.log(" id enterd");

  let customerId = document.getElementById("update-id").value;
  console.log(customerId);

  fetch("http://localhost:8080/customer/search-by-id/" + customerId)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // document.getElementById("delete-id").value = data.id;
      document.getElementById("update-name").value = data.name;
      document.getElementById("update-address").value = data.address;
      document.getElementById("update-salary").value = data.salary;
    });
}

function deleteCustomer() {
  let customerid = document.getElementById("delete-id").value;
  const requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  fetch("http://localhost:8080/customer/delete/" + customerid, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  // document.getElementById("delete-name").value = "";
  // document.getElementById("delete-address").value = "";
  // document.getElementById("delete-salary").value = "";

  let model = document.getElementById("deleteModel");
  let modelInstance = bootstrap.Modal.getInstance(model);
  modelInstance.hide();
}

function searchCustomerByText() {
  console.log(" text enterd");

  let searchText = document.getElementById("search-text").value;

  fetch("http://localhost:8080/customer/search-by-text/" + searchText)
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);

      let resultData = "";

      let custTable = document.getElementById("table-search-data");

      data.forEach((customer) => {
        resultData += `
      <tr class="text-center">
      <td>${customer.id}</td>
      <td>${customer.name}</td>
      <td>${customer.address}</td>
      <td>${customer.salary}</td>
      </tr>
      `;

        custTable.innerHTML = resultData;
      });
    });
}

function toggelsearchType() {
  let searchType = document.getElementById("searchType").value;
  let searchbytext = document.getElementById("search-customer-by-text");
  let searchbyid = document.getElementById("search-customer-by-id");

  if (searchType === "id") {
    searchbytext.style.display = "none";
    searchbyid.style.display = "block";
    document.getElementById("id-btn").style.display = "block";
    document.getElementById("txt-btn").style.display = "none";
  } else {
    searchbytext.style.display = "block";
    searchbyid.style.display = "none";
    document.getElementById("id-btn").style.display = "none";
    document.getElementById("txt-btn").style.display = "block";
  }
}

function updateCustomer() {
  let customerId = document.getElementById("update-id").value;
  let name = document.getElementById("update-name").value;
  let address = document.getElementById("update-address").value;
  let salary = document.getElementById("update-salary").value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    id: customerId,
    name: name,
    address: address,
    salary: salary,
  });

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/customer/update-customer", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  let model = document.getElementById("updateModel");
  let modelInstance = bootstrap.Modal.getInstance(model);
  modelInstance.hide();
}
