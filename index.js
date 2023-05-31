async function fetchProductsData(){
    try {
        let response = await fetch ("https://dummyjson.com/products");

        let translatedData = await response.json();
        console.log(translatedData)

        let actualProductsData = translatedData.results;
        console.log(actualProductsData)
        
        return actualProductsData;
    
    } catch (error) {
        console.error(error);
    }
}

async function renderProducts(){
    let productsContainer = document.getElementById('products-container')

    let myProductsData = await fetchProductsData()
    console.log(myProductsData)

    for(let i = 0; i < myProductsData.length; i++){
        
        let update = myProductsData[i];
        console.log (update)

        let newUpdateResults = document.createElement("p");

        newUpdateResults.innerText = update.title;
        newUpdateResults.style.border = "2px solid black"

        completeData.appendChild(newUpdateResults)
    }
}

async function fetchPostData() {
    try {

      let postResponse = await fetch('https://dummyjson.com/posts/');

      let translatedPostData = await postResponse.json();

      let actualPostData = translatedPostData;
      console.log(actualPostData);

      return actualPostData;

    } catch (error) {
      console.error(error);
      
    }
  }
  
  async function renderPost() {
    let poContain = document.getElementById("posts-container");

    let myposts = await fetchPostData();
  
    for(let i = 0; i < myposts.length; i++){

      let myCurrPostObj= myposts[i];

      let newPostEle = document.createElement('p');

      newPostEle.innerText = myCurrPostObj.title;
      newPostEle.style.border = "3px solid red";
      poContain.appendChild(newPostEle);
    };
  }
 

renderPost();
  
renderProducts();