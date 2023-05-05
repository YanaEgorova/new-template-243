export const item = (product) => {

  return `
    <li class="item ">

      
  <div class="product__block js_product glass glass-m" id="${product.id}">

  <div class="product__img-box">
    
     <img src="${product.image}" alt="" class="img">

    </div>
  
    <div class="product__text-box">
    <p class="product__name js_product-name">${product.name}</p>
    ${product.description[0].text.length > 0 ? '<p class="text product__desc">' + product.description[0].text.slice(0, 60) + "..." + '</p>' : ''}
    
      <span class="product__price">
      <span>$</span>${(product.price).toFixed(2)}
      </span>
      </div>
      <div class="product__btn-block">
      <a href="product-page.html?id=${product.id}" class="btn btn--first" style="margin: ${product.type == "ring" || product.type == "clothing" ? 'auto' : ''}"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="30px" height="30px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve">
   <path id="XMLID_30_" d="M21,53c-1.8,0-3.7-0.8-5-2.1c-1.3-1.3-2-3.1-2-4.9c0-1.8,0.8-3.6,2-5c1.3-1.3,3.1-2,5-2c1.8,0,3.6,0.8,4.9,2
     c1.3,1.3,2.1,3.1,2.1,5c0,1.8-0.8,3.6-2.1,4.9C24.6,52.2,22.8,53,21,53z M50.9,50.9c1.3-1.3,2.1-3.1,2.1-4.9c0-1.8-0.8-3.6-2.1-5
     c-1.3-1.3-3.1-2-4.9-2c-1.8,0-3.7,0.8-5,2c-1.3,1.3-2,3.1-2,5c0,1.8,0.8,3.6,2,4.9c1.3,1.3,3.1,2.1,5,2.1
     C47.8,53,49.6,52.2,50.9,50.9z M75.9,50.9c1.3-1.3,2.1-3.1,2.1-4.9c0-1.8-0.8-3.6-2.1-5c-1.3-1.3-3.1-2-4.9-2c-1.8,0-3.7,0.8-5,2
     c-1.3,1.3-2,3.1-2,5c0,1.8,0.8,3.6,2,4.9c1.3,1.3,3.1,2.1,5,2.1C72.8,53,74.6,52.2,75.9,50.9z"/>
   </svg></a>
    ${
      product.type == "ring" || product.type == "clothing" ? '' : '<button class="btn js_add-to-cart"><svg width="20px" height="19px" viewBox="0 0 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -3120.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M98.477,2976.95566 L89.541,2976.95566 C89.052,2976.95566 88.635,2976.59484 88.555,2976.10113 L87.361,2968.77831 L100.819,2968.77831 L99.46,2976.12362 C99.37,2976.60608 98.958,2976.95566 98.477,2976.95566 L98.477,2976.95566 Z M101,2966.73398 L97.473,2960.51101 C97.198,2960.02651 96.592,2959.85887 96.116,2960.1369 L96.116,2960.1369 C95.635,2960.41697 95.47,2961.04356 95.747,2961.53216 L98.69,2966.73398 L89.309,2966.73398 L92.257,2961.53625 C92.532,2961.0497 92.371,2960.42822 91.897,2960.14405 L91.888,2960.13894 C91.411,2959.85478 90.798,2960.02037 90.522,2960.50897 L87,2966.73398 L85,2966.73398 C84.447,2966.73398 84,2967.19191 84,2967.75614 C84,2968.32038 84.447,2968.77831 85,2968.77831 L85.333,2968.77831 L86.721,2977.29196 C86.882,2978.27733 87.716,2979 88.694,2979 L99.305,2979 C100.283,2979 101.118,2978.27733 101.278,2977.29196 L102.666,2968.77831 L103,2968.77831 C103.552,2968.77831 104,2968.32038 104,2967.75614 C104,2967.19191 103.552,2966.73398 103,2966.73398 L101,2966.73398 Z" id="shopping_cart_round-[#1137]"></path></g></g></g></svg></button>'
    }
    </div>
  

     

 
    
</div>

  </li>
    `
}


