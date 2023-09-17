export async function CreateUserAPI(user) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  const url = " http://192.168.29.119:5174/user";
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log("all data");
  console.log(data);
  return data;
}

export async function CheckUserAPI(user) {
  const url = " http://192.168.29.119:5174/user?email=" + user.email;
  const response = await fetch(url)
  const data = await response.json();
  console.log("all data");
  console.log(data);
  return data;
}
