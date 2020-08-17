const SECRET_KEY =
  "$2b$10$j9jxfg3TDe1DZJm.xGz7PuVewpXTgE0wBrI66awPfTt.k2gto8EeO";

class ApiService {
  getHeaders = () => {
    return new Headers({
      "secret-key": SECRET_KEY,
    });
  };

  get = async (url: string) => {
    const getRequest = new Request(url, {
      method: "GET",
      headers: this.getHeaders(),
      mode: "cors",
      cache: "default",
    });

    return fetch(getRequest).then(
      (response) => {
        if (response.status === 200) {
          return response.json().then((data) => {
            return data;
          });
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };
}

const apiService = new ApiService();

export default apiService;
