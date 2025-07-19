import { getSession, clearSession } from "./session.js";
const session = getSession();
const welcome = document.getElementById("welcome");
const eventList = document.getElementById("eventList");
const createBtn = document.getElementById("createEventBtn");

welcome.innerText = `Bienvenido, ${session.email}`;
document.getElementById("logoutBtn").addEventListener("click", () => {
  clearSession();
  location.href = "login.html";
});

if (session.role === "admin") {
  createBtn.style.display = "inline-block";
  createBtn.addEventListener("click", () => {
    location.href = "create-event.html";
  });
}

async function loadEvents() {
  const res = await fetch("http://localhost:3001/events");
  const events = await res.json();
  eventList.innerHTML = "";
  for (const e of events) {
    const div = document.createElement("div");
    div.innerHTML = `
      <h4>${e.title}</h4>
      <p>${e.location} - Capacidad: ${e.attendees.length}/${e.capacity}</p>
      ${session.role === "admin" ? `
        <button onclick="location.href='edit-event.html?id=${e.id}'">Editar</button>
        <button onclick="deleteEvent(${e.id})">Eliminar</button>
      ` : `
        <button onclick="registerEvent(${e.id})">Inscribirme</button>
      `}
      <hr>
    `;
    eventList.appendChild(div);
  }
}
loadEvents();

window.deleteEvent = async function(id) {
  await fetch(`http://localhost:3001/events/${id}`, { method: "DELETE" });
  loadEvents();
};

window.registerEvent = async function(id) {
  const res = await fetch(`http://localhost:3001/events/${id}`);
  const event = await res.json();
  if (event.attendees.includes(session.id)) {
    alert("Ya estás registrado");
    return;
  }
  if (event.attendees.length >= event.capacity) {
    alert("Evento lleno");
    return;
  }
  event.attendees.push(session.id);
  await fetch(`http://localhost:3001/events/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(event)
  });
  loadEvents();
};
