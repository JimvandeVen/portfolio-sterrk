const { Text, CalendarDay } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: {
      type: Text,
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
    startDate: {
      type: CalendarDay,
      isRequired: true,
    },
    endDate: {
      type: CalendarDay,
    },
  },
};
