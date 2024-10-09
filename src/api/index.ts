import {
  LoginCredentials,
  RegistrationCredentials,
  SocialAuth,
} from "../types/crendentialTypes";
import { login, logout, register, self } from "./api";

export const registerUser = async (credentials: RegistrationCredentials) => {
  const { data } = await register(credentials);
  return data;
};

export const loginUser = async (credentials: LoginCredentials) => {
  const { data } = await login(credentials);
  return data;
};

export const logoutUser = async () => {
  const { data } = await logout();
  return data;
};

export const getSelf = async () => {
  const { data } = await self();
  return data;
};

export const handleSocialAuthentication = (social: SocialAuth) => {
  //   window.history.replaceState(
  //     {},
  //     import.meta.env.VITE_BACKEND_API_URL + `/auth/${social}`
  //   );
  window.location.href =
    import.meta.env.VITE_BACKEND_API_URL + `/auth/${social}`;
};
