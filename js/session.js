export function saveSession(user) {
  localStorage.setItem("sessionUser", JSON.stringify(user));
}
export function getSession() {
  return JSON.parse(localStorage.getItem("sessionUser"));
}
export function clearSession() {
  localStorage.removeItem("sessionUser");
}
