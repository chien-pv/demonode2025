import jwt from "jsonwebtoken";

export function checkLoginMiddware(req, res, next) {
  if (req.session.user) next();
  else res.redirect("/login/form");
}

export function checkLoginAPIMiddware(req, res, next) {
  if (jwt.verify(token, "Nodejs")) next();
  else
    res
      .status(400)
      .json({ message: "Bạn cần đăng nhập để thực hiện chức năng này!!!" });
}
