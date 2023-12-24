export const validateForm = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);
  if (!isEmailValid) {
    return "Please enter valid email";
  }
  if (!isPasswordValid) {
    return "Please enter valid email";
  }
  return null;
};
