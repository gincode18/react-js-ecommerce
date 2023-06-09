import User from '../model/userSchema'

export const logout=(req, res) => {
    res.cookie("token", null, {
      httpOnly: true,
      expires: new Date(Date.now()),
    });
    res.redirect("/");
  }