let content=document.querySelector(".content");
let inputField=document.querySelector("#inputField");
let searchBtn=document.querySelector("#searchBtn");


          function fetchData(searching){
            fetch(`https://newsapi.org/v2/everything?q=${searching}&apiKey=8309cdd01e4d4cd79d61104e6a842717`)
            .then((res)=>res.json())
            .then((ans)=>{
           displayData(ans.articles)
          // console.log(ans)
            })
  
          }
          fetchData()

         
          function displayData(data){

                content.innerHTML=""

                data.forEach((Val)=>{

             let{title,description,urlToImage}=Val
  
           content.innerHTML+=`
           <div class="m-5 card shadow-lg" style="width: 18rem;">
           <img src="${urlToImage}" class="card-img-top h-50" alt="...">
           <div class="card-body">
             <h5 class="card-title">${title}</h5>
             <p class="card-text">${description}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`

         })
            

        }



searchBtn.addEventListener("click",(e)=>{
e.preventDefault()
 let searchData=inputField.value;
fetchData(searchData)
})