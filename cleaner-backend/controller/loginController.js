import User from '../model/userSchema'
import bcrypt from 'bcryptjs'

export const login=async (req, res) => {
    const { email, password } = req.body;
  
    let user = await User.findOne({ email });
  
    if (!user) return res.redirect("/register");
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch)
      return res.render("login", { email, message: "Incorrect Password" });
  
    const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");
  
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 1000),
    });
    res.redirect("/");
  }