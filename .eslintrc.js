module.exports = {
  root: true,
  extends: ["universe/native", "plugin:@tanstack/eslint-plugin-query/recommended"],
  plugins: ["@tanstack/query"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
