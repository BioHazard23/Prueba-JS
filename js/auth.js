import { saveSession } from './session.js';
const api = 'http://localhost:3001/users';

export async function register(email, password, role) {
  const res = await fetch(api + `?email=${email}`);
  const existing = await res.json();
  if (existing.length > 0) throw new Error("Correo ya registrado");
  const user = { email, password, role };
  const result = await fetch(api, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  });
  return result.json();
}

export async function login(email, password) {
  const res = await fetch(`${api}?email=${email}&password=${password}`);
  const users = await res.json();
  if (users.length === 0) throw new Error("Credenciales inválidas");
  saveSession(users[0]);
  return users[0];
}
