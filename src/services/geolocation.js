function getGeolocation(successCallback) {
  navigator.geolocation.getCurrentPosition(successCallback, (err) => console.error('erro:', err));
}

export async function handleGeolocationPermission(successCallback) {
  getGeolocation(successCallback);
}
