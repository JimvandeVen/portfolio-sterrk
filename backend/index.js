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
const adapterConfig = { mongoUri: process.env.DATABASE_URL };

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
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
