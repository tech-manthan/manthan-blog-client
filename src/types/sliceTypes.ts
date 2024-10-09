export interface UserState {
  _id: string;
  personal_info: {
    fullname: string;
    email: string;
    username: string;
    bio: string;
    profile_img: string;
  };
  social_links: {
    youtube: string;
    instagram: string;
    facebook: string;
    twitter: string;
    github: string;
    website: string;
  };
  account_info: {
    total_posts: number;
    total_reads: number;
  };
  role: string;
  joinedAt: Date | null;
}

export interface UserData {
  user: UserState;
}
