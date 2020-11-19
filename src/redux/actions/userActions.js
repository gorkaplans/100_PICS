export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_USER_LOCATION = 'SET_USER_LOCATION';

export function setUserProfile(userProfile) {
  return { type: SET_USER_PROFILE, payload: userProfile }
}

export function setUserLocation(userProfileLocation) {
  return { type: SET_USER_LOCATION, payload: userProfileLocation }
}
