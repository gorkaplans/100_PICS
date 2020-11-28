export async function easyFetch(url) {
    const response = await fetch(url)
    const { status } = response;
    if (status === 200) {
      const result = await response.json();
      return result;
    }
    return null;
  }
  