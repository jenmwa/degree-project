
export async function getProductsService() {
  {
    try {
      const response = await fetch("/api/handlers?entity=Product");
      const data = await response.json();
      return data.data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
}
