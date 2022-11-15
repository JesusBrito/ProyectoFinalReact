export const getProductsRequest = async (categoryId) => {
  const response = await fetch(
    "https://6244e0467701ec8f724a5a7f.mockapi.io/api/productos"
  );
  const jsonResponse = await response.json();
  if (categoryId) {
    return jsonResponse.filter((product) => product.categoria === categoryId);
  }
  return jsonResponse;
};

export const getDetailProductRequest = async (productId) => {
  const response = await fetch(
    "https://6244e0467701ec8f724a5a7f.mockapi.io/api/productos"
  );
  const jsonResponse = await response.json();
  if (productId) {
    return jsonResponse.find((product) => product.id === Number(productId));
  }
  return jsonResponse;
};
