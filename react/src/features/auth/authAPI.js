export async function CreateUserAPI() {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ vishal: "vishal" }),
  };
  const url = "http://localhost:3000/user";
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log("all data");
  console.log(data);
  return data;
}
