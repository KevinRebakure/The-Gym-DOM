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
      const idCell = document.createElement("td");
      const productCell = document.createElement("td");
      const quantityCell = document.createElement("td");
      const priceCell = document.createElement("td");
      const totalCell = document.createElement("td");
      const deleteCell = document.createElement("td");
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
      const idText = document.createTextNode(id);
      const productText = document.createTextNode(product);
      const quantityText = document.createTextNode(quantity);
      const priceText = document.createTextNode(price);
      const totalText = document.createTextNode(
        parseInt(quantity) * parseInt(price)
      );
      const deleteText = document.createTextNode("❌");
      // Add the content to the DOM
      idCell.appendChild(idText);
      productCell.appendChild(productText);
      quantityCell.appendChild(quantityText);
      priceCell.appendChild(priceText);
      totalCell.appendChild(totalText);
      deleteCell.appendChild(deleteText);

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
