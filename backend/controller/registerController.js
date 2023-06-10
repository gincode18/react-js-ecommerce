import User from '../model/userSchema'
export const register= async (req, res) => {
    const {  email, password } = req.body;
  
    let user = await User.findOne({ email });
    if (user) {
      return res.redirect("/login");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
  
    user = await User.create({
      
      email,
      password: hashedPassword,
    });
  
    const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");
  
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 1000),
    });
    res.redirect("/");
  }