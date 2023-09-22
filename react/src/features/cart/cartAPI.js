export async function AddToCartAPI(cart) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  };
  const url = " http://192.168.29.119:5174/cart";
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log("add to cart");
  console.log(data);
  return data;
}
export async function FetchCartAPI(userid) {
  const url = `http://192.168.29.119:5174/cart?users=${userid}`;
  console.log(url);
  const response = await fetch(url);
  console.log(userid);
  const data = await response.json();
  console.log("all to cart");
  console.log(data);
  return data;
}

