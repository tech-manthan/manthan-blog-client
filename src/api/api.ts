import { api } from "./http";
import {
  LoginCredentials,
  RegistrationCredentials,
} from "../types/crendentialTypes";

export const login = (credentials: LoginCredentials) =>
  api.post("/auth/login", credentials);
export const register = (credentials: RegistrationCredentials) =>
  api.post("/auth/register", credentials);
export const logout = () => api.post("/auth/logout");

export const self = () => api.get("/auth/self");
