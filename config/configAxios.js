import axios from "axios";

export const ClientAxiosBack = axios.create({
  baseURL: "https://erp.skydone.net/api/v1",
});