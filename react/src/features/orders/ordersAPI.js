export async function GetOrdersAPI(id) {
  const response = await fetch(` http://192.168.29.119:5174/orders?user=${id}`);
  const data = await response.json();
  console.log('all data');
  console.log(data);
  return data;
}
export async function CreateOrdersAPI(orders) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orders),
  };
  const url = " http://192.168.29.119:5174/orders";
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log("all data");
  console.log(data);
  return data;
}





