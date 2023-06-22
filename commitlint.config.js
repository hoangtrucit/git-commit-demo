module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-function-rules"],
  rules: {
    "type-empty": [0],
    "subject-empty": [0],
    "subject-case": [0],
    "type-enum": [0],
    "function-rules/type-enum": [
      2,
      "always",
      (parsed) => {
        const headerRegex =
          /(build|chore|ci|docs|refactor|revert|style|test|fix|feat)(\([a-z]+\))?: APM-(\d+) .+/;
        const isHeaderValid = parsed.header.match(headerRegex);
        if (isHeaderValid) {
          return [true];
        }
        return [false, `header must match this regex: ${headerRegex}`];
      },
    ],
  },
};
