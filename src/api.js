const api = (function () {
  async function get() {
    let url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  return {
    get: get,
  };
})();

export default api;
