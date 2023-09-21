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
  const response = await fetch(url);
  const data = await response.json();
  console.log("all data");
  console.log(data);
  return data;
}

export async function UpdateUserAPI(user) {
  const url = `http://192.168.29.119:5174/user/${user.users[0].id}`;
  console.log(url);
  console.log("YA PADH LODU");
  console.log(user);
  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({addresses:user.addresses}),
  };

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the response as JSON

    console.log("PATCH request successful:", data);
    return data;
    // Handle the response data as needed
  } catch (error) {
    console.error("Error:", error);
    // Handle errors here
  }
}

