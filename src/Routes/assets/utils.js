const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const MESSAGES = {
  LOGIN_SUCCESS: 'Login successful!',
  LOGIN_FAILURE: 'Login failed. Please try again.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  INVALID_PASSWORD: 'Please enter a valid password. Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.',
  USER_NOT_FOUND: 'User not found. Please check your email.',
  WRONG_PASSWORD: 'Incorrect password. Please try again.',
  FETCH_PROFILE_FAILURE: 'Logged in, but failed to fetch user profile.',
  LOGOUT_SUCCESS: 'Logged Out successful',
  LOGOUT_FAILURE: 'Logout Failed',
}

export { EMAIL_REGEX, PASSWORD_REGEX, MESSAGES };