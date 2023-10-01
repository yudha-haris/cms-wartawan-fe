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

  async function register({email, username, password}) {
    const response = await fetch(`${BASE_URL}/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    });

    const responseJson = await response.json();

    const { message } = responseJson;

    if (message) {
      throw new Error(message);
    }

    return responseJson;
  
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

  async function getDraftList({
    page = "1",
    limit = "6",
  } = {}) {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/draft/list?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseJson = await response.json();
    return responseJson;

  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    loginEmail,
    loginUsername,
    getDraftList,
  };
})();

export default api;