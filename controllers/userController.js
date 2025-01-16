class UserController {
  static index(req, res) {
    res.send({ users: [] });
  }
}

export default UserController;
