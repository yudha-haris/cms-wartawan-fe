const api = (() => {

  const BASE_URL = "https://ta-aings-399219.uc.r.appspot.com";

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

  async function register({ email, username, password }) {
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

  async function loginUsername({ username, password }) {

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
      `${BASE_URL}/v1/draft?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

    const responseJson = await response.json();
    return responseJson;

  }

  async function getDraftById({ id }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/draft/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

    const responseJson = await response.json();
    return responseJson;

  }

  async function createDraft({ prompt }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/draft`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

    const responseJson = await response.json();
    return responseJson;

  }

  async function editDraft({ id, content }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/draft/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
        }),
      });

    const responseJson = await response.json();
    return responseJson;

  }

  async function saveDraftToNew({ id, content }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/draft/save/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
        }),
      });

    const responseJson = await response.json();
    return responseJson;

  }

  async function getComment({ versionId }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/comment/${versionId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

    const responseJson = await response.json();
    return responseJson;

  }

  async function createComment({ versionId }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/comment/${versionId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
        }),
      });

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
    getDraftById,
    createDraft,
    editDraft,
    saveDraftToNew,
    getComment,
    createComment,
  };
})();

export default api;