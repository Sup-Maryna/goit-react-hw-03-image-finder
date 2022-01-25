const apiBase = "https://pixabay.com/api/";
const api_key = "24226787-6ce4851176ffde83450b99032";
const images_per_page = "12";

function getService(query, page = 1) {
  return fetch(
    `${apiBase}?q=${query}&page=${page}&key=${api_key}&image_type=photo&orientation=horizontal&per_page=${images_per_page}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`Could not fetch ${apiBase}, received ${res.status}`);
    }
    return res.json();
  });
}

export { getService, images_per_page };
