import { getSession } from "./session.js";
const user = getSession();
const protectedPaths = ["/dashboard.html", "/create-event.html", "/edit-event.html"];
if (!user && protectedPaths.includes(window.location.pathname)) {
  window.location.href = "/views/not-found.html";
}
if (user && ["/views/login.html", "/views/register.html"].includes(window.location.pathname)) {
  window.location.href = "/views/dashboard.html";
}
