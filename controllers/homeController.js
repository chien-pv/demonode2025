class HomeController {
  static index(req, res) {
    res.send(`
            <h1> Login</h1>
            <form method='post' action='/login'>
            <button> Submit </button>
            </form>
            `);
  }
}

export default HomeController;
