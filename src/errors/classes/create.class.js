class CreateError extends Error {
  /**
   * @param {string} what The name of what could not be created.
   * @param {Error} why The root cause.
   * @returns {CreateError} a new error.
   */
  constructor(what, why) {
    super(
      `Failed to create a [${what}] due to [${
        why instanceof Error ? why.message : why
      }].`,
      {
        cause: why instanceof Error ? why : null,
      }
    );
  }

  /**
   * @param {string} what The name of what could not be created.
   * @param {Error} why The root cause.
   * @returns {Promise<CreateError>} a new reject error.
   */
  static reject(what, why) {
    return Promise.reject(new CreateError(what, why));
  }
}

module.exports = CreateError;
