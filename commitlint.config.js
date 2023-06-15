module.exports = {
  //   plugins: ["commitlint-plugin-jira-rules"],
  //   extends: ["jira", "@commitlint/config-conventional"],
  extends: [
    // "@commitlint/config-conventional",
    "@dwmt/commitlint-config-jira-type",
  ],
  plugins: ["@dwmt/commitlint-plugin-jira-type"],
  rules: {
    // "jira-task-id-max-length": [2, "always", 10],
    // "jira-task-id-project-key": [2, "always", "APM"],
    "subject-case": [2, "never", ["upper-case", "pascal-case", "start-case"]],
    "jira-type-project-key-enum": [2, "always", ["APM"]],
    "jira-type-type-enum": [2, "always", ["feat", "fix"]],
    "jira-type-commit-message-separator": [2, "always", ""],
    "jira-type-type-separator": [2, "always", "/"],
  },
};
