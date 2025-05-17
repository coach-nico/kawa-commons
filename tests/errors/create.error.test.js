const { describe, it } = require("node:test");
const assert = require("node:assert");
const CreateError = require("../../src/errors/classes/create.class");
const common = require("../../");

describe("Checks [Create] error class.", () => {
  describe("Checks constructor.", () => {
    it("should return expected implementation", () => {
      assert.strictEqual(
        common.errors.create.new() instanceof CreateError,
        true
      );
    });
  });

  describe("Checks properties.", () => {
    describe("Checks [message] property.", () => {
      it("should return expected message when 'why' is an error", () => {
        assert.strictEqual(
          common.errors.create.new("w", new Error("cause")).message,
          `Failed to create a [w] due to [cause].`
        );
      });

      it("should return expected message when 'why' is not an error", () => {
        assert.strictEqual(
          common.errors.create.new("w", "not an error").message,
          `Failed to create a [w] due to [not an error].`
        );
      });
    });

    describe("Checks [cause] property.", () => {
      it("should return given when 'why' is an error", () => {
        const cause = new Error("cause");
        assert.strictEqual(common.errors.create.new("w", cause).cause, cause);
      });

      it("should return null when 'why' is not an error", () => {
        assert.strictEqual(
          common.errors.create.new("w", "not an error").cause,
          null
        );
      });
    });
  });

  describe("Checks static utilities.", () => {
    describe("Checks [reject] utility.", () => {
      it("should reject a new create error.", async () => {
        assert.rejects(
          common.errors.create.reject("w", new Error("cause")),
          common.errors.create.new("w", new Error("cause"))
        );
      });
    });
  });
});
