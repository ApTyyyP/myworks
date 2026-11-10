module.exports = {
  plugins: [
    require("tailwindcss"),
    {
      // Normalize the deprecated property emitted by @tailwindcss/forms.
      postcssPlugin: "normalize-print-color-adjust",
      Declaration: {
        "color-adjust": declaration => {
          declaration.prop = "print-color-adjust";
        }
      }
    },
    require("autoprefixer")
  ]
};
