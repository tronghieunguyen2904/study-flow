// stores/profile.js
import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: null as Profile | null,
  }),
  actions: {
    setProfile(data: Profile) {
      this.profile = data;
    },
    clearProfile() {
      this.profile = null;
    },
  },
  persist: true,
});
