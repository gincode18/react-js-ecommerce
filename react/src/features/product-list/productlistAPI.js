export async function fetchProduct() {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  return data;
}
var querystring=''
export async function fetchProductByFilter(query) {
  for ( let k in query) {
     querystring+=`${k}=${query[k]}&`
    
  }
  console.log(querystring);
  const response = await fetch(`http://localhost:3000/products?${querystring}`);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function fetchProductBySort(query) {
  for ( let k in query) {
     querystring+=`_${k}=${query[k]}&`
  }
  console.log('sort');
  console.log(querystring);
  console.log(`http://localhost:3000/products?${querystring}`);
  const response = await fetch(`http://localhost:3000/products?${querystring}`);
  const data = await response.json();
  console.log(data);
  return data;
}


