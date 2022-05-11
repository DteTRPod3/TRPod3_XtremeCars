import { PASSWORD, USERNAME } from "../constants";

export function request(url: string): Promise<any> {
    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
        },
    })
    .then((response) => response.json())
    .then((json) => json);
}