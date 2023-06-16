import axios from 'axios';

const BASE_URL = 'http://localhost:3333/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODUwZGZkMzYzZDc0OGNlYmIxNmIzMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjgxODE1NywiZXhwIjoxNjg3MDc3MzU3fQ.0Zy4IXDyg4D4emXi8KCV7BKGZfFHCth6MAklALTcgzc';
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
