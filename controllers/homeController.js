class HomeController {
  static index(req, res) {
    // console.log(req);
    res.send(`
            <h1> Login</h1>
            <form method='post' action='/login'>
            <input name="uname">
            <button> Submit </button>
            </form>
            `);
  }
}

export default HomeController;
