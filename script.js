function myFunction(){
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  // Sample product data (replace this with your actual data)
const products = [
    {
      name: "Product 1",
      price: "$20",
      image: "shirt.PNG",
    },
    {
      name: "Product 2",
      price: "$25",
      image: "shirt.PNG",
    },
    {
      name: "Product 3",
      price: "$35",
      image: "shirt.PNG",
    },
    {
      name: "Product 3",
      price: "$8",
      image: "shirt.PNG",
    },
    {
      name: "Product 4",
      price: "$9",
      image: "shirt.PNG",
    },
    {
      name: "Product 5",
      price: "$16",
      image: "shirt.PNG",
    },
    {
      name: "Product 6",
      price: "$13",
      image: "shirt.PNG",
    },
    {
      name: "Product 7",
      price: "$17",
      image: "shirt.PNG",
    },
    {
      name: "Product 8",
      price: "$22",
      image: "shirt.PNG",
    },
    {
      name: "Product 9",
      price: "$20",
      image: "shirt.PNG",
    },
    {
      name: "Product 10",
      price: "$30",
      image: "shirt.PNG",
    },
    {
      name: "Product 10",
      price: "$30",
      image: "shirt.PNG",
    },
  ];
  
  /*PRODUCT CARD*/
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
  
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
  
    const name = document.createElement("h3");
    name.textContent = product.name;
  
    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}`;
  
    const button = document.createElement("button");
    button.textContent = "Add to Cart";
  
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(button);
  
    return card;
  }
  
  // Function to display products
  function displayProducts() {
    const container = document.querySelector(".products-container");
  
    products.forEach((product) => {
      const card = createProductCard(product);
      container.appendChild(card);
    });
  }
  
  
  document.getElementById('read-more-btn').addEventListener('click', function() {
    document.querySelector('.story-description').innerHTML = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
    `;
  });
  
  function myFunction() {
    var x = document.getElementById("socialIcons");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
