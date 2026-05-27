export const Login = (req, res) => {
    const { username, password } = req.body;

  if (username && password) {
    return res.json({
      token: "prodesk-mock-demo-jwt-token-12345"
    });
  }

  res.status(400).json({
    message: "Username and password required"
  });
};