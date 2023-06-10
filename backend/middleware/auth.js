import User from '../model/userSchema'
import jwt from 'jsonwebtoken'
export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
      const decoded = jwt.verify(token, "sdjasdbajsdbjasd");
      console.log("decoded", decoded);
  
      req.User = await User.findById(decoded._id);
  
      next();
    } else {
      res.redirect("/login");
    }
  };