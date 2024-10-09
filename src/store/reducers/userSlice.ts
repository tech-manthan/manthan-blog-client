import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types/sliceTypes";

const initialState: UserState = {
  personal_info: {
    fullname: "",
    email: "",
    username: "",
    bio: "",
    profile_img: "",
  },
  social_links: {
    youtube: "",
    instagram: "",
    facebook: "",
    twitter: "",
    github: "",
    website: "",
  },
  account_info: {
    total_posts: 0,
    total_reads: 0,
  },
  role: "",
  _id: "",
  joinedAt: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to update personal info
    updatePersonalInfo(
      state,
      action: PayloadAction<Partial<UserState["personal_info"]>>
    ) {
      state.personal_info = { ...state.personal_info, ...action.payload };
    },

    // Action to update social links
    updateSocialLinks(
      state,
      action: PayloadAction<Partial<UserState["social_links"]>>
    ) {
      state.social_links = { ...state.social_links, ...action.payload };
    },

    // Action to update account info
    updateAccountInfo(
      state,
      action: PayloadAction<Partial<UserState["account_info"]>>
    ) {
      state.account_info = { ...state.account_info, ...action.payload };
    },

    // Action to set role
    setRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },

    // Reset user to initial state (e.g., for logging out)
    resetUser() {
      return initialState;
    },
  },
});

// Export actions and reducer
export const {
  updatePersonalInfo,
  updateSocialLinks,
  updateAccountInfo,
  setRole,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
