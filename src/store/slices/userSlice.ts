import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types/sliceTypes";
import { RootState } from "..";

const initialState: UserState = {
  _id: "",
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
  joinedAt: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // add User
    addUser(state, action: PayloadAction<UserState>) {
      console.log(action.payload);
      return { ...state, ...action.payload };
    },

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

// Selectors
export const getUser = (state: RootState) => state.user;
export const isUserPresent = (state: RootState) => state.user._id !== "";

// Export actions and reducer
export const {
  addUser,
  updatePersonalInfo,
  updateSocialLinks,
  updateAccountInfo,
  setRole,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
