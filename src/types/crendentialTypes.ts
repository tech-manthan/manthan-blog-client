export interface RegistrationCredentials {
  fullname: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export enum SocialAuth {
  google = "google",
  github = "github",
}
