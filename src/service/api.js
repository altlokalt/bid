import { apis } from "service";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/`;

const API_URLS = {
  POST_LIST: `${COMMON_URL}api/v1/user/list`,
  POST_REGISTER: `${COMMON_URL}auth/register`,
};

export const postList = (payload) =>
  apis.post(API_URLS.POST_LIST, {
    ...payload,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTNmOTI0NTNjODViYzEyNjU4ZjNiZSIsInVzZXJuYW1lIjoiSnVkZ2VfQ3JvbmluIiwiaWF0IjoxNjcxNjk3MTcxfQ.hbZLKSsS6Mdj1ndhAf4rm_5we4iWYvKY1VPSo51sQRM",
      ...payload?.headers,
    },
  });

export const postRegister = (payload) =>
  apis.post(API_URLS.POST_REGISTER, payload);
