import { PASSWORD, USERNAME } from "../constants";

export function getRequest(url: string): Promise<any> {
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
    },
  })
    .then((response) => response.json())
    .then((json) => json);
}

export function postRequest(url: string, formData: any): Promise<any> {
  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => json);
}
