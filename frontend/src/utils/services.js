// export const baseUrl = "http://localhost:30021/api";
export const baseUrl = "https://chat-me-iota-livid.vercel.app";

export const postRequest = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();
  if (!response.ok) {
    let message;

    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }

  return data;
};

export const getRequest = async (url) => {
  const response = await fetch(url);

  const data = await response.json();
  if (!response.ok) {
    let message = "An Error Occured...";
    console.log("Response not ok");
    if (data?.message) {
      message = data.message;
    }
    return { error: true, message };
  }
  return data;
};
