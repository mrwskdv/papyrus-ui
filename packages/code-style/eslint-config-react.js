module.exports = {
  plugins: ["jsx-a11y", "react", "react-hooks"],
  extends: [
    "plugin:import/react",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react",
            importNames: ["default"],
          },
        ],
      },
    ],
    "react/destructuring-assignment": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": [
      "error",
      { callbacksLast: true, reservedFirst: true },
    ],
    "react/no-array-index-key": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.jsx"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
        "react/require-default-props": "off",
      },
    },
  ],
};
