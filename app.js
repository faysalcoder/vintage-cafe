// Product load on server
const featuresProducts= [
  {
  id:1,
  name:'Vanilla Cake',
  price:30,
  image:"assets/img/product/product4.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:2,
  name:'Red Velvet Cake',
  price:40,
  image:"assets/img/product/product5.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:3,
  name:'Chocolate Cake',
  price:25,
  image:"assets/img/product/product6.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:4,
  name:'Chocolava Cake',
  price:30,
  image:"assets/img/product/product7.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:1,
  name:'Vanilla Cake',
  price:30,
  image:"assets/img/product/product8.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:2,
  name:'Red Velvet Cake',
  price:40,
  image:"assets/img/product/product1.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:3,
  name:'Chocolate Cake',
  price:25,
  image:"assets/img/product/product2.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:4,
  name:'Chocolava Cake',
  price:30,
  image:"assets/img/product/product3.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
}

]
const bestSeller= [
  {
  id:1,
  name:'Vanilla Cake',
  price:30,
  image:"assets/img/product/product11.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:2,
  name:'Red Velvet Cake',
  price:40,
  image:"assets/img/product/product12.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:3,
  name:'Chocolate Cake',
  price:25,
  image:"assets/img/product/product8.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:4,
  name:'Chocolava Cake',
  price:30,
  image:"assets/img/product/product9.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:1,
  name:'Vanilla Cake',
  price:30,
  image:"assets/img/product/product2.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:2,
  name:'Red Velvet Cake',
  price:40,
  image:"assets/img/product/product1.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:3,
  name:'Chocolate Cake',
  price:25,
  image:"assets/img/product/product3.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:4,
  name:'Chocolava Cake',
  price:30,
  image:"assets/img/product/product4.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
}

]
const newItem= [
  {
  id:1,
  name:'Vanilla Cake',
  price:30,
  image:"assets/img/product/product1.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:2,
  name:'Red Velvet Cake',
  price:40,
  image:"assets/img/product/product2.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:3,
  name:'Chocolate Cake',
  price:25,
  image:"assets/img/product/product8.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:4,
  name:'Chocolava Cake',
  price:30,
  image:"assets/img/product/product10.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:1,
  name:'Vanilla Cake',
  price:30,
  image:"assets/img/product/product5.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:2,
  name:'Red Velvet Cake',
  price:40,
  image:"assets/img/product/product6.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:3,
  name:'Chocolate Cake',
  price:25,
  image:"assets/img/product/product7.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
},
  {
  id:4,
  name:'Chocolava Cake',
  price:30,
  image:"assets/img/product/product12.png",
  size: ["small","medium","large"],
  flavour:["vanilla","chocolate","strabrary"],
  color:["white","blue","pink"],
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  available:true
}

]
// const loadProducts = () => {
//   const url = `product.js`;
//   fetch(url)
//     .then((response) => response)
//     .then((data) => console.log(data));
// };
// loadProducts();

const featuresProductContainer= document.getElementById("features-product-container");
const bestSellerContainer=  document.getElementById("best-seller-container");
const newItemContainer=  document.getElementById("new-item-container");


  const bestSellerElement= document.getElementById('best-seller')
  bestSellerElement.addEventListener("click",()=>{
    if(bestSellerContainer.innerHTML==``){
    showProducts(bestSeller, false, true,false);
    newItemContainer.innerHTML=``
  }
  })


const newItemElement= document.getElementById('new-item')
newItemElement.addEventListener("click",()=>{
  if(newItemContainer.innerHTML==``){
    showProducts(newItem, false, false, true);
    bestSellerContainer.innerHTML=``
  }
 
})

// show all product in UI 
const showProducts = (products, first, second, third) => {
  const allProducts = products.map((pd) => pd);
  for (const product of allProducts) {
    const image = product.image;
    
    const div = document.createElement("div");
    div.classList.add("col-lg-3");
    div.classList.add("col-md-4");
    div.classList.add("col-sm-6");

   const containerDiv = `
    
    
   
    
    
    


      <article class="single_product">
          <figure>
              <div class="product_thumb">
                  <a href="single-product.html"><img src="${image}" alt=""></a>
                  <div class="action_links">
                      <ul class="d-flex justify-content-center">
                          <li class="add_to_cart">
                              <a href="cart.html" title="Add to cart"> <span class="pe-7s-shopbag"></span></a>
                          </li>
                          <li class="wishlist"><a href="wishlist.html" title="Add to Wishlist"><span
                                      class="pe-7s-like"></span></a></li>
                          <li class="quick_button">
                              <a onclick="showSingleProduct(${product.id})" href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#modal_box">
                                  <span class="pe-7s-look"></span></a>
                          </li>
                      </ul>
                  </div>
              </div>
              <figcaption class="product_content text-center">
                  <h4><a href="single-product.html">${product.name}</a></h4>
                  <div class="price_box">
                      <span class="current_price">${product.price}</span>
                  </div>
              </figcaption>
          </figure>
      </article>
 
    
  
      
      
      `;
     
      if(first){
       
       featuresProductContainer.appendChild(div);
       div.innerHTML= containerDiv;
       bestSellerContainer.innerHTML=``
       newItemContainer.innerHTML=``
       
      }

  if(second){
    
      
      div.innerHTML= containerDiv;
      bestSellerContainer.appendChild(div);
    }
   
        

   if(third){
      newItemContainer.appendChild(div);
      
        div.innerHTML=containerDiv
      }
 
   
  }
};

showProducts(featuresProducts, true, false, false);

const showSingleProduct=(id)=>{
  console.log(id)
}
// // Product count 
// let count = 0;
// const addToCart = (id, price) => {
//   count = count + 1;
//   updatePrice("price", price);

//   updateTaxAndCharge();
//   updateTotal();
//   document.getElementById("total-Products").innerText = count;
// };

// // add prices 
// const getInputValue = (id) => {
//   const element = document.getElementById(id).innerText;
//   const converted = parseFloat(element);
//   return converted;
// };

// // main price update function
// const updatePrice = (id, value) => {
//   const convertedOldPrice = getInputValue(id);
//   const convertPrice = parseFloat(value);
//   const total = convertedOldPrice + convertPrice;
//   document.getElementById(id).innerText = total.toFixed(2);
// };

// // set innerText function
// const setInnerText = (id, value) => {
//   document.getElementById(id).innerText = parseFloat(value).toFixed(2);
// };

// // update delivery charge and total Tax
// const updateTaxAndCharge = () => {
//   const priceConverted = getInputValue("price");
//   if (priceConverted > 200) {
//     setInnerText("delivery-charge", 30);
//     setInnerText("total-tax", priceConverted * 0.2);
//   }
//   if (priceConverted > 400) {
//     setInnerText("delivery-charge", 50);
//     setInnerText("total-tax", priceConverted * 0.3);
//   }
//   if (priceConverted > 500) {
//     setInnerText("delivery-charge", 60);
//     setInnerText("total-tax", priceConverted * 0.4);
//   }
// };

// //grandTotal update function
// const updateTotal = () => {
//   const grandTotal =
//     getInputValue("price") + getInputValue("delivery-charge") +
//     getInputValue("total-tax");
//   document.getElementById("total").innerText = parseFloat(grandTotal).toFixed(2);
// };

// //  show 1 product detail on modal 
// const showDetail = (id) => {
//   const url = `https://fakestoreapi.com/products/${id}`
//   fetch(url)
//     .then(res => res.json())
//     .then(data => displayProduct(data))
// }

// const displayProduct = (product) => {


//   const modalData = `
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">${product.title}</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//       <img src="${product.image}" class="card-img-top product-image" style="height:400px"  alt="...">
//       <p>${product.description}</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">$ ${product.price}</button>
//       </div>
//     </div>
//   `;
//   const modalContainer = document.getElementById('modal-container');
//   modalContainer.innerHTML = modalData;

// }



{/* <div class="card h-100 " >
      <img src="${image}" class="card-img-top product-image" style="height:400px"  alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">Category: ${product.category}</p>
        <h2>Price: $ ${product.price}</h2>
        
        <div class="d-flex justify-content-around py-2 ">
        <div class="text-warning"><i class="fas fa-star"></i> ${rate}</div>
        <div class="text-success"><i class="fas fa-user"></i> ${count}</div>
        </div>
        
        <button onclick="addToCart(${product.id},${product.price})" id="addToCart-btn" class="buy-now btn btn-success">add to cart</button>
      <button onclick="showDetail(${product.id})" id="details-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger">Details</button>
      
      </div>
      </div> */}
    
  