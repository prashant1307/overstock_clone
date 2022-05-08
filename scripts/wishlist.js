
// btn.setAttribute("class", "add");
// console.log(document.getElementsByTagName("button"));

// .addEventListener("click",storeProducts(data));
// storeProducts(data);


var obj = [
    {  title :"Prominence Home Marshall",
        price : 118,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow"
    },
    {
        title :"Prominence Home Marshall",
        price : 458,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow" 
    },
    {
        title :"Farmhouse Ceiling Fan",
        price : 738,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow"
    },
    {
        title :"Prominence Ceiling Fan",
        price : 120,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow"
    }
    
    ]
    let addbio = document.getElementById("addbio");
    if(document.getElementById("bio").value === ''){
        addbio.innerHTML = "Add your bio";
    }
    
    
    
    append(obj);
    var data = JSON.parse(localStorage.getItem("items")) || [];
    // let products = document.getElementById("products");
    
    function append(data) {
    
        data.forEach(function(elem){
            let products = document.getElementById("products");
            let div1 = document.createElement("div");
    
            let p1 = document.createElement("p");
            p1.innerText=elem.title;
    
            let price = document.createElement("p");
            price.innerText = elem.price;
    
            let image = document.createElement("img");
            image.src = elem.url;
    
            let btn = document.createElement("button");
            btn.innerText = "Add to Wishlist";
            btn.addEventListener("click",function(){
            
                adjust(elem);

                
// btn.setAttribute("class", "add");
// console.log(document.getElementsByTagName("button"));

// .addEventListener("click",storeProducts(data));
// storeProducts(data);


var obj = [
    {  title :"Prominence Home Marshall",
        price : 118,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow"
    },
    {
        title :"Prominence Home Marshall",
        price : 458,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow" 
    },
    {
        title :"Farmhouse Ceiling Fan",
        price : 738,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow"
    },
    {
        title :"Prominence Ceiling Fan",
        price : 120,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow"
    }
    
    ]
    let addbio = document.getElementById("addbio");
    if(document.getElementById("bio").value === ''){
        addbio.innerHTML = "Add your bio";
    }
    
    
    
    append(obj);
    var data = JSON.parse(localStorage.getItem("items")) || [];
    // let products = document.getElementById("products");
    
    function append(data) {
    
        data.forEach(function(elem){
            let products = document.getElementById("products");
            let div1 = document.createElement("div");
    
            let p1 = document.createElement("p");
            p1.innerText=elem.title;
    
            let price = document.createElement("p");
            price.innerText = elem.price;
    
            let image = document.createElement("img");
            image.src = elem.url;
    
            let btn = document.createElement("button");
            btn.innerText = "Add to Wishlist";
            btn.addEventListener("click",function(){
            
                adjust(elem);

                
// btn.setAttribute("class", "add");
// console.log(document.getElementsByTagName("button"));

// .addEventListener("click",storeProducts(data));
// storeProducts(data);


var obj = [
    {  title :"Prominence Home Marshall",
        price : 118,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow"
    },
    {
        title :"Prominence Home Marshall",
        price : 458,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow" 
    },
    {
        title :"Farmhouse Ceiling Fan",
        price : 738,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow"
    },
    {
        title :"Prominence Ceiling Fan",
        price : 120,
        url: "https://ak1.ostkcdn.com/images/products/is/images/direct/0cd5620961b4b4c915c485da866572054a37661d/52in-Prominence-Home-Marshall-Indoor-Ceiling-Fan-in-Matte-Black.jpg?impolicy=mediumlow"
    }
    
    ]
    let addbio = document.getElementById("addbio");
    if(document.getElementById("bio").value === ''){
        addbio.innerHTML = "Add your bio";
    }
    
    
    
    append(obj);
    var data = JSON.parse(localStorage.getItem("items")) || [];
    // let products = document.getElementById("products");
    
    function append(data) {
    
        data.forEach(function(elem){
            let products = document.getElementById("products");
            let div1 = document.createElement("div");
    
            let p1 = document.createElement("p");
            p1.innerText=elem.title;
    
            let price = document.createElement("p");
            price.innerText = elem.price;
    
            let image = document.createElement("img");
            image.src = elem.url;
    
            let btn = document.createElement("button");
            btn.innerText = "Add to Wishlist";
            btn.addEventListener("click",function(){
            
                adjust(elem)
    
            })
    
            div1.append(image,p1,price,btn);
            products.append(div1);
    
        })
    }
    
    function adjust(elem) {
        // let data = [];
        data.push(elem);
    
        localStorage.setItem("items",JSON.stringify(data));
        location.reload(true);
    }
    
    let edit = document.getElementById("edit");
    edit.addEventListener("click",function() {
        console.log("inside div");
        // location.href("profile.html");
    })
    
    
    
    var profile = JSON.parse(localStorage.getItem("profile")) || [];
    let bio = document.getElementById("bio");
    
    let register = (e) =>{
            e.preventDefault();
            let form_data = {
                fname: document.getElementById("fname").value,
                lname: document.getElementById("lname").value,
                sname: document.getElementById("sname").value,
                loc: document.getElementById("loc").value,
                state: document.getElementById("state").value,
                bio: document.getElementById("bio").value,
            };
            console.log(form_data);
            profile.push(form_data);
            console.log(profile);
            localStorage.setItem("profileData",JSON.stringify(profile));
            // bio.innerHTML = profile.bio;
            location.reload(true);
    
           
        }
    
            document.getElementById("save").addEventListener("click",register);
    
    
    
    document.getElementById("edit").addEventListener("click",userDeatail);
    let updateBio = document.getElementById("addbio");
    
         function userDeatail() {
             console.log("working")
         var products = document.getElementById("products");
        var userForm  = document.getElementById("userForm");
        //     console.log("working !");
        if(userForm.style.display = "none"){
            userForm.style.display = "block";
            products.style.display = "none"; 
    
        }
    }
    
    let saveBTN = document.getElementById("save");
    // let addbio = document.getElementById("addbio");
    // document.getElementById("bio").value;
    saveBTN.addEventListener("click",function() {
        event.preventDefault();
        console.log("save button");
        console.log(document.getElementById("bio").value);
        if(document.getElementById("bio").value === ''){
            addbio.innerHTML = "Add your bio";
        }else{
            addbio.innerHTML = '';
            addbio.innerHTML =  document.getElementById("bio").value;
        }
        
        addbio.append(document.getElementById("biosection"));
        // console.log(profileData.bio);
    })
    
    // console.log(form_data);
    
    
    
    
    // document.getElementsByTagName("button").addEventListener("click",function(){
    //     data.push(elem);
    //     localStorage.setItem("items",JSON.stringify(data));
    //     location.reload(true);
    
    // })
    
    // if(count = document.querySelector("#count"));
    
    // if(data === []){
    //     count.innerText = 0;
    // }else{
    //     count.innerText = data.length;
    // }
    
    
    
    
    
    
    // function storeProducts (data) {
    //     data.forEach(function(elem) {
    //     cart.push(elem);
    
    //     localStorage.setItem("items",JSON.stringify(cart));
    //     location.reload(true);
    //     })
    // }
    
    
    
    
    
            })
    
            div1.append(image,p1,price,btn);
            products.append(div1);
    
        })
    }
    
    function adjust(elem) {
        // let data = [];
        data.push(elem);
    
        localStorage.setItem("items",JSON.stringify(data));
        location.reload(true);
    }
    
    let edit = document.getElementById("edit");
    edit.addEventListener("click",function() {
        console.log("inside div");
        // location.href("profile.html");
    })
    
    
    
    var profile = JSON.parse(localStorage.getItem("profile")) || [];
    let bio = document.getElementById("bio");
    
    let register = (e) =>{
            e.preventDefault();
            let form_data = {
                fname: document.getElementById("fname").value,
                lname: document.getElementById("lname").value,
                sname: document.getElementById("sname").value,
                loc: document.getElementById("loc").value,
                state: document.getElementById("state").value,
                bio: document.getElementById("bio").value,
            };
            console.log(form_data);
            profile.push(form_data);
            console.log(profile);
            localStorage.setItem("profileData",JSON.stringify(profile));
            // bio.innerHTML = profile.bio;
            location.reload(true);
    
           
        }
    
            document.getElementById("save").addEventListener("click",register);
    
    
    
    document.getElementById("edit").addEventListener("click",userDeatail);
    let updateBio = document.getElementById("addbio");
    
         function userDeatail() {
             console.log("working")
         var products = document.getElementById("products");
        var userForm  = document.getElementById("userForm");
        //     console.log("working !");
        if(userForm.style.display = "none"){
            userForm.style.display = "block";
            products.style.display = "none"; 
    
        }
    }
    
    let saveBTN = document.getElementById("save");
    // let addbio = document.getElementById("addbio");
    // document.getElementById("bio").value;
    saveBTN.addEventListener("click",function() {
        event.preventDefault();
        console.log("save button");
        console.log(document.getElementById("bio").value);
        if(document.getElementById("bio").value === ''){
            addbio.innerHTML = "Add your bio";
        }else{
            addbio.innerHTML = '';
            addbio.innerHTML =  document.getElementById("bio").value;
        }
        
        addbio.append(document.getElementById("biosection"));
        // console.log(profileData.bio);
    })
    
    // console.log(form_data);
    
    
    
    
    // document.getElementsByTagName("button").addEventListener("click",function(){
    //     data.push(elem);
    //     localStorage.setItem("items",JSON.stringify(data));
    //     location.reload(true);
    
    // })
    
    // if(count = document.querySelector("#count"));
    
    // if(data === []){
    //     count.innerText = 0;
    // }else{
    //     count.innerText = data.length;
    // }
    
    
    
    
    
    
    // function storeProducts (data) {
    //     data.forEach(function(elem) {
    //     cart.push(elem);
    
    //     localStorage.setItem("items",JSON.stringify(cart));
    //     location.reload(true);
    //     })
    // }
    
    
    
    
    
            })
    
            div1.append(image,p1,price,btn);
            products.append(div1);
    
        })
    }
    
    function adjust(elem) {
        // let data = [];
        data.push(elem);
    
        localStorage.setItem("items",JSON.stringify(data));
        location.reload(true);
    }
    
    let edit = document.getElementById("edit");
    edit.addEventListener("click",function() {
        console.log("inside div");
        // location.href("profile.html");
    })
    
    
    
    var profile = JSON.parse(localStorage.getItem("profile")) || [];
    let bio = document.getElementById("bio");
    
    let register = (e) =>{
            e.preventDefault();
            let form_data = {
                fname: document.getElementById("fname").value,
                lname: document.getElementById("lname").value,
                sname: document.getElementById("sname").value,
                loc: document.getElementById("loc").value,
                state: document.getElementById("state").value,
                bio: document.getElementById("bio").value,
            };
            console.log(form_data);
            profile.push(form_data);
            console.log(profile);
            localStorage.setItem("profileData",JSON.stringify(profile));
            // bio.innerHTML = profile.bio;
            location.reload(true);
    
           
        }
    
            document.getElementById("save").addEventListener("click",register);
    
    
    
    document.getElementById("edit").addEventListener("click",userDeatail);
    let updateBio = document.getElementById("addbio");
    
         function userDeatail() {
             console.log("working")
         var products = document.getElementById("products");
        var userForm  = document.getElementById("userForm");
        //     console.log("working !");
        if(userForm.style.display = "none"){
            userForm.style.display = "block";
            products.style.display = "none"; 
    
        }
    }
    
    let saveBTN = document.getElementById("save");
    // let addbio = document.getElementById("addbio");
    // document.getElementById("bio").value;
    saveBTN.addEventListener("click",function() {
        event.preventDefault();
        console.log("save button");
        console.log(document.getElementById("bio").value);
        if(document.getElementById("bio").value === ''){
            addbio.innerHTML = "Add your bio";
        }else{
            addbio.innerHTML = '';
            addbio.innerHTML =  document.getElementById("bio").value;
        }
        
        addbio.append(document.getElementById("biosection"));
        // console.log(profileData.bio);
    })
    
    // console.log(form_data);
    
    
    
    
    // document.getElementsByTagName("button").addEventListener("click",function(){
    //     data.push(elem);
    //     localStorage.setItem("items",JSON.stringify(data));
    //     location.reload(true);
    
    // })
    
    // if(count = document.querySelector("#count"));
    
    // if(data === []){
    //     count.innerText = 0;
    // }else{
    //     count.innerText = data.length;
    // }
    
    
    
    
    
    
    // function storeProducts (data) {
    //     data.forEach(function(elem) {
    //     cart.push(elem);
    
    //     localStorage.setItem("items",JSON.stringify(cart));
    //     location.reload(true);
    //     })
    // }
    
    
    
    