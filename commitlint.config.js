module.exports = {
  //   plugins: ["commitlint-plugin-jira-rules"],
  //   extends: ["jira", "@commitlint/config-conventional"],
  extends: ["@commitlint/config-conventional"],
  rules: {
    // "jira-task-id-max-length": [2, "always", 10],
    // "jira-task-id-project-key": [2, "always", "APM"],
    "subject-case": [2, "never", ["upper-case", "pascal-case", "start-case"]],
  },
};
