const CreateError = require("./classes/create.class");

module.exports = {
  create: {
    new: (what, why) => new CreateError(what, why),
    reject: (what, why) => CreateError.reject(what, why),
  },
};
