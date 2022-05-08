import {topmost,navbar,bottom_nav} from '../components/navbar.js';
document.getElementById('navbar').innerHTML=navbar()
document.getElementById('topmost').innerHTML=topmost()
document.getElementById('bottom_nav').innerHTML=bottom_nav()



let productData = [

    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/7d66e6eb5a2deb834ef34770354830d0df32670a/Cambridge-Casual-Alston-Porch-Rocking-Chair.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13654.57",
     rating : 4.2,
     title : "Cambridge Casual Alston Outdoor Rocking Chair"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/b5cb64381e8f2fed3bbe51ed75d04ebf129cc02d/Veradek-Brixton-Window-Box-36%22-Planter.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 6476.31",
     rating : 4.8,
     title : "Veradek Brixton Series 36' Planter box",
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/92e8e8a36e87cb6935ea78091b041debff5e710b/Brookside%C2%A0Iris%C2%A0Rattan-Outdoor-Seating-Set%C2%A0with-Patio-Table%C2%A0.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 22117.28",
     rating : 4,
     title : "Brookside Iris Rattan Outdoor Seating Set"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/c4741064f0b76314e8ad8088d41406a85b5c0b39/Outsunny-6%27-L-x-8%27-W-x-7%27-H-Outdoor-Walk-In-Tunnel-Greenhouse-with-3-Levels-of-Shelving%2C-Roll-up-Door%2C-%26-Weather-Cover.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 4613.73",
     rating : 4,
     title : "Outsunny 6'L x 7'H Outdoor Walk-in Tunnel Greenhouse with 3-Levels of Shelving,Roll-up Door, & Weather Cover"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/2ce5434ee0008bdb6fd6ac752e28a3f45ead7a7d/3-pc.-Outdoor-Cushioned-Wicker-Chat-Set.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13745.26",
     rating : 4.1,
     title : "3-pc Outdoor Cushioned Wicker Chat Set"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/12306079/Keter-Novel-90-gallon-Brown-Plastic-Deck-Storage-Box-e8568c25-a562-4d45-b01f-df14f7364d1f_600.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 9525.67",
     rating : 4.1,
     title : "Keter Novel 90-gallon Brown Plastic Deck Storage Box"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/90e38a8b20ab04904d9c818e81c3a2adf8fc1c57/Metallic-Series-Long-Box-Planter.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 10262.51",
     rating : 4.9,
     title : "Metallic Series Long Planter"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/119e7e38ea488fdbeb4703188cdd3bec732550ab/SUNCROWN-4-foot-Wooden-Raised-Garden-Bed.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 8247.33",
     rating : 4.2,
     title : "SUNCROWN 4-foot Wooden Raised Garden Bed"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/90544efd79e696054930a593e3a12f380f4025c8/Suncrown-Outdoor-5-Piece-Wicker-Patio-Canopy-Daybed.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 58768.10",
     rating : 4,
     title : "Nuon %-peice Outdoor Wicker Patio Cabopy Daybed Set by Havenside Kome"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/dfae9e1528eecd80fd4d0b5a102ffb351b2a24b5/Laguna-Poly-Folding-Adirondack-Chair-%28Set-of-4%29.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 589669.53",
     rating : 4.8,
     title : "Laguna Ploy Folding Adirondack Chair (Set of 4)"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/7458c550be8ec2584ca4479ce72499332bab6af5/Glitzhome-20.5%22H-Cobalt-Blue-Ceramic-Outdoor-Fountain-with-LED-Light.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13562.14",
     rating : 4.5,
     title : "Demta Cobalt Blue Creamic Founding with LED Light by Havenside Home"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/a122ab1e7c8a2e1bbedaef03ab3111050cd19b73/Brixton-Tall-28%22-Planter.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 6414.40",
     rating : 5,
     title : "Veradek Briton Tall 28' Planter",
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/f87d39b3135feb7500b05112f81f0ed604088b85/Set-of-2-Zero-Gravity-Chair-Patio-Folding-Lawn-Lounge-Chairs-Outdoor-Lounge-Gravity-Chair-Camp-Reclining-Lounge-Chair.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 11175.49",
     
     rating : 4.5,
     title : "Homall Patio Zero Gravity Chair Lawn Lounge Chair with Pillow Set of 2"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/cb19b033eb05c2103ee8380ff37add3f22280471/Alpine-Corporation-Plastic-Birdbath-with-Scrollwork.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 2552.33",
     rating : 4.3,
     title : "Alpine Corporation 28' Tall Outside Birdbath with Scrollwork Decoration Yard Statue"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/f2541011903e0ed2c7c59b72bb469682487351e3/28%27%27-Square-Glass-Metal-Table-with-Rattan-Edging-and-4-Rattan-Stack-Chairs.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 19997.46",
     rating : 4.5,
     title : "28' Square Glass Metal Table with Rattan Edging and 4 Rattan Atack Chairs"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/afd54b49d56b8b52897a588590c3676c566623f2/EROMMY12%22-x-16-%22-Hardtop-Gazebo%2CPermanent-Outdoor-Patio-Gazebo.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 114798.14",
     rating : 4.6,
     title : "EROMMY Hardtop Gazebo, Permanent Outdoor Patio Gazebo"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/0138b9ee2a29ec0867945215c23a7f4b450e186a/Alpine-Corporation-3-Tier-Rustic-Barrel-Outdoor-Fountain%2C-40-Inches.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 10680.19",
     rating : 4.7,
     title : "Alpino Corporation 40' Tall Outdoor 3-Tier Barrel Pump Waterfall Fountain, Brown"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/978343afb933fd75d941eab803946d1f8fc9ae5d/SAFAVIEH-Outdoor-Living-Newport-Brown-Cart-Wheel-Adjustable-Chaise.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 29886.76",
     rating : 4.6,
     title : "SAFAVIEH Outdoor Living Newport Brown Cart Wheel Adjustment Chaise-27.6' x 14.2'"
 
     },
 
     {
 
     image : "https://ak1.ostkcdn.com/images/products/15858927/Siscovers-Fiji-Outdoor-Accent-Pillow-39f86360-14bd-4464-8dad-50cc1c85c02b_600.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 2931.65",
     rating : 5,
     title : "Siscover Fiji Indoor - Outdoor Tropical Throw Pillow"
 
     },
 
     {
 
         image : "https://ak1.ostkcdn.com/images/products/30970154/Outsunny-3.3ft-Wooden-Garden-Bridge-Arc-Stained-Finish-Walkway-with-Half-Wheeled-Railings-Stained-Wood-3d6fb362-56ab-4e43-a986-187ff29eb802_600.jpg?imwidth=480&impolicy=medium",
         name : "Sale INR 7970.91",
         rating : 4,
         title : "Half Wheeled Rating, Stained Wood"
     
     },
 
     {
 
         image : "https://ak1.ostkcdn.com/images/products/is/images/direct/528d4ffe31b6ea9201101840de9ac17202ebfb54/Sunjoy-11-Ft.-x-11-Ft.-Pop-Up-Portable-Steel-Gazebo.jpg?imwidth=480&impolicy=medium",
         name : "Sale INR 78232.78",
         rating : 4.3,
         title : "COSIEST 4-piece Patio Outdoor Cushioned Wicker Sectional Sofa Set "
     
     },
 
 ]
 
 let cartData = JSON.parse(localStorage.getItem("cart")) || []
 let listData = JSON.parse(localStorage.getItem("list")) || []
 
 displayData(productData)
 function displayData(productData){
 
     productData.map(function(elem){
 
         let box = document.createElement("div")
     
         let img = document.createElement("img")
         img.src = elem.image;
     
         let name = document.createElement("h4")
         name.innerText = elem.name;
         name.setAttribute("class","nam")
     
         let rating = document.createElement("p")
         rating.innerText = elem.rating;
 
         rating.setAttribute("class","rat")
     
     
         let title = document.createElement("p")
         title.innerText = elem.title;
         title.setAttribute("class","tit")

    //      let e = document.createElement("h5");
    // e.setAttribute("class","sourceText");
    // e.append('<i class="fa fa-trash-o" aria-hidden="true"></i>');


         let box2 = document.createElement("div")
         box2.setAttribute("class","boxer")
     
         let btn = document.createElement("button")
         btn.innerText = "ADD TO CART"
         btn.addEventListener("click",function(){
             addToCart(elem);
         });
         btn.setAttribute("class","bt")
     
         let btn2 = document.createElement("button")
         btn2.innerText = "ADD TO WISHLIST"
         btn2.addEventListener("click",function(){
             wishlist(elem);
         });
         btn2.setAttribute("class","button")

         box2.append(btn,btn2)
     
         box.append(img, name, rating,title,box2);

         document.querySelector("#container").append(box)
     });
 
 }
 
 
 function addToCart(elem){
     console.log(elem);
     cartData.push(elem)
     localStorage.setItem("cart",JSON.stringify(cartData))
 }
 
 function wishlist(elem){
     console.log(elem);
     listData.push(elem)
     localStorage.setItem("list",JSON.stringify(listData))
 }
 
 function handlerating() {
     document.querySelector("#container").innerHTML = ""
     let selected = document.querySelector("#sort").value
     
 
     if(selected == "lth")
     {
         productData.sort(function(a,b){
             return a.rating - b.rating
         });
         console.log(productData)
         displayData(productData)
     }
     if(selected == "htl")
     {
         productData.sort(function(a,b){  
             return b.rating - a.rating
         });
         console.log(productData);
         displayData(productData)
     }
 }