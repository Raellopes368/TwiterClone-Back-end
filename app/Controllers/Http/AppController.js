"use strict";
const User = use("App/Models/User");
class AppController {
  async index() {
    const users = await User.query()
      .with("tweets")
      .fetch();

    return users;
  }
}

module.exports = AppController;
