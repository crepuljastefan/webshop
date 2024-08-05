import axios from "axios";
export function getImageUrl(imagePath) {
  if (imagePath === undefined) {
    return `/assets/tn1.webp`;
  }
  return `/assets/${imagePath}`;
}
export async function fetchSomeProducts(page, size) {
  this.loading = true;
  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/products?page=${page}&size=${size}`
    );
    this.products = response.data;

    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    this.loading = false;
  }
}
