const { Text, Relationship } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    projects: {
      type: Relationship,
      ref: "Project.tags",
      many: true,
    },
  },
};
