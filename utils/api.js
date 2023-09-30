import axios from "axios";

const api = (() => {
  const BASE_URL = "http://localhost:9000";

  function putAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  async function fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function loginEmail({ email, password }) {

    const response = await fetch(`${BASE_URL}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();

    const { token } = responseJson;

    if (!token) {
      const { message } = responseJson;
      throw new Error(message);
    }

    return token;

  }

  async function loginUsername({username, password }) {

    const response = await fetch(`${BASE_URL}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const responseJson = await response.json();

    const { token } = responseJson;

    if (!token) {
      const { message } = responseJson;
      throw new Error(message);
    }

    return token;

  }

  return {
    putAccessToken,
    getAccessToken,
    loginEmail,
    loginUsername,
  };
})();

export default api;