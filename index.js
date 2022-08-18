// const myButton = document.getElementById("myBtn");
// let myData = "./data.json";
// let myd = JSON.parse("./data.json");
// let toggle = true;
// myButton.addEventListener("click", function () {
//   console.log(myData[1].Score);
// });

let http = new XMLHttpRequest();

http.open("get", "products.json", true);

http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);

    let output = "";
    for (let item of products) {
      output += `
          <div class = "product">
          <image src="${item.image}" alt ="${item.image}">
          <p class="title">${item.title}</p>
          <p class="description">${item.description}</p>
          <p class="price"></p>
            <span>${item.price}</span>
            <span>&euro;</span>
          </p>
        </div>  
        `;
    }

    document.querySelector(".products").innerHTML = output;
  }
};
