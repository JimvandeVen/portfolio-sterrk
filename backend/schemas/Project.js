const { Text, Relationship, Integer } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    year: {
      type: Integer,
      isRequired: true,
    },
    description: {
      type: Text,
      isRequired: true,
    },
    descriptionNl: {
      type: Text,
      isRequired: true,
    },
    tags: {
      type: Relationship,
      ref: "Tag.projects",
      many: true,
    },
  },
};
