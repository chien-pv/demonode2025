class HomeController {
  static index(req, res) {
    let users = [
      {
        id: 1,
        name: "Nguyen van AA",
        email: "abc@gmail.com",
      },
      {
        id: 2,
        name: "Nguyen van B",
        email: "abcd@gmail.com",
      },
      {
        id: 3,
        name: "Nguyen van D",
        email: "abcf@gmail.com",
      },
    ];
    res.render("home/index", { users: [] });
  }
}

export default HomeController;
