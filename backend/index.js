const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const TagSchema = require("./schemas/Tag.js");
const ProjectSchema = require("./schemas/Project.js");
const EmployerSchema = require("./schemas/Employer.js");

const dotenv = require("dotenv");
dotenv.config();
const PROJECT_NAME = "backend";
const adapterConfig = {
  mongoUri: process.env.DATABASE_URL,
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookie: {
    secure: process.env.NODE_ENV === "production", // Default to true in production
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
  },
  cookieSecret: process.env.COOKIE_SECRET,
});

keystone.createList("Tag", TagSchema);
keystone.createList("Project", ProjectSchema);
keystone.createList("Employer", EmployerSchema);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),
  ],
};
