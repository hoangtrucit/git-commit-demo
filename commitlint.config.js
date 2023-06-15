module.exports = {
  //   extends: ["@commitlint/config-conventional", "jira"],
  plugins: ["commitlint-plugin-jira-rules"],
  extends: ["jira"],
  rules: {
    "jira-task-id-max-length": [2, "always", 10],
  },
};
