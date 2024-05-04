let tbody = document.querySelector("#cart table tbody");
let total = document.querySelector("#total ");
let prices = [0, 0, 0, 0];

for (let button of document.querySelectorAll("#products article button")) {
  button.addEventListener("click", function (event) {
    // Read data
    const parent = event.currentTarget.parentElement;
    parent.classList.toggle("sale");
    const id = parent.getAttribute("data-id");
    const product = parent.querySelector("h2").textContent;
    const quantity = parent.querySelector("input").value;
    const price = parent.querySelector("p.price").textContent;
    // Keep track of product IDs
    const ids = [];
    for (let row of Array.from(tbody.children)) {
      ids.push(Array.from(row.children)[0].textContent);
    }
    // Add content
    if (!ids.includes(id)) {
      // create cells
      const row = document.createElement("tr");
      row.setAttribute("data-id", id);
      let idCell = document.createElement("td");
      let productCell = document.createElement("td");
      let quantityCell = document.createElement("td");
      let priceCell = document.createElement("td");
      let totalCell = document.createElement("td");
      let deleteCell = document.createElement("td");
      deleteCell.addEventListener("click", function () {
        deleteCell.parentElement.remove();
        switch (id) {
          case "1":
            prices[0] = 0;
            break;

          case "2":
            prices[1] = 0;
            break;

          case "3":
            prices[2] = 0;
            break;

          case "4":
            prices[3] = 0;
            break;
        }
        console.log(prices);
        total.textContent = prices.reduce((total, value) => total + value, 0);
      });
      // create text nodes
      idCell.textContent = id;
      productCell.textContent = product;
      quantityCell.textContent = quantity;
      priceCell.textContent = price;
      totalCell.textContent = parseInt(quantity) * parseInt(price);
      deleteCell.textContent = "❌";

      row.append(
        idCell,
        productCell,
        quantityCell,
        priceCell,
        totalCell,
        deleteCell
      );

      tbody.appendChild(row);

      switch (id) {
        case "1":
          prices[0] = parseInt(totalText.textContent);
          break;

        case "2":
          prices[1] = parseInt(totalText.textContent);
          break;

        case "3":
          prices[2] = parseInt(totalText.textContent);
          break;

        case "4":
          prices[3] = parseInt(totalText.textContent);
          break;
      }

      console.log(prices);
      console.log(`Added prices for id:${id}`);
    }
    // Change content
    if (ids.includes(id)) {
      const row = document.querySelector(
        `#cart table tbody tr[data-id="${id}"]`
      );
      const cells = Array.from(row.children);
      cells[2].textContent = quantity;
      cells[4].textContent = parseInt(quantity) * parseInt(price);

      switch (id) {
        case "1":
          prices[0] = parseInt(quantity) * parseInt(price);
          break;

        case "2":
          prices[1] = parseInt(quantity) * parseInt(price);
          break;

        case "3":
          prices[2] = parseInt(quantity) * parseInt(price);
          break;

        case "4":
          prices[3] = parseInt(quantity) * parseInt(price);
          break;
      }
      console.log(prices);
      console.log(`Updated from changing: ${id}`);
    }
    // Total
    total.textContent = prices.reduce((total, value) => total + value, 0);
  });
}