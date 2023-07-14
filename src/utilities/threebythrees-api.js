import sendRequest from "./send-request";
const BASE_URL = '/api/threebythrees';

export function create(payload) {
  return sendRequest(`${BASE_URL}/create`, 'POST', payload);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}