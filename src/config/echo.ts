import Pusher from "pusher-js";
import Echo from "laravel-echo";

const pusher = new Pusher("sdf", {
  cluster: "ap2",
  forceTLS: false,
  wsHost: window.location.hostname,
  wsPort: 6001,
  enableStats: true,
  authEndpoint: "http://localhost:8000/api/broadcasting/auth",
  auth: {
    headers: {
      Accept: "application/json",
    },
  },
});

const options = {
  client: pusher,
  broadcaster: "pusher",
};

let echo = new Echo(options);
export const socketId = echo.socketId();

export default {
  setAuthToken: (token: string | null) => {
    if (pusher.config.auth) {
      pusher.config.auth.headers["Authorization"] = `Bearer ${token}`;
    }

    echo = new Echo(options);
  },
  getInstance: () => {
    return echo;
  },
};
