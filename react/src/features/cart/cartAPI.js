export async function AddToCartAPI(cart) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  };
  const url = " http://localhost:3000/cart";
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log("add to cart");
  console.log(data);
  return data;
}
export async function FetchCartAPI(userid) {
  const url = `http://localhost:3000/cart/${userid}`;
  console.log(url);
  const response = await fetch(url);
  console.log(userid);
  const data = await response.json();
  console.log("all to cart");
  console.log(data);
  return data;
}
export async function ClearCartAPI(userid) {
  const allitems = await FetchCartAPI(userid);
  console.log(allitems);
  allitems.forEach(async (item) => {
    const url = `http://localhost:3000/cart/${item.id}`;
    console.log(url);
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(url);
    const response = await fetch(url, requestOptions);
    console.log(userid);
    const data = await response.json();
    console.log("delted cart");
    console.log(data);
  });
}
export async function RemoveFromCartAPI(itemid) {
  const url = `http://localhost:3000/cart/${itemid}`;
  console.log(url);
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(url);
  const response = await fetch(url, requestOptions);

  const data = await response.json();
  console.log("delted cart");
  console.log(data);
}
