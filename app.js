let apiUrl="https://fakestoreapi.com/products"
let tableBody=document.getElementById("tableBody")
console.log(apiUrl);
let data=fetch(apiUrl)
console.log(data);
data.then((msg)=>{
    console.log(msg);
    let finaldata=msg.json()
    console.log(finaldata);
    finaldata.then((msg)=>{
        console.log(msg);
        msg.map(({id,title,category,image,description,price})=>{
            tableBody.innerHTML+=
            `
            <tr id="prdRow">
            <td>${id}</td>
            <td><div id="title">${title}</div></td>
            <td>${category}</td>
            <td><div id="image"><img src=${image} height="200px" width="200px"></div></td>
            <td><div id="desp">${description}</div></td>
            <td><div id="price">Rs:${price}</div></td>
            </tr>
            
            `
            

        })

    })

})