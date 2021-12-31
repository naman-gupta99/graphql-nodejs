import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Repository {
        owner: String
        name: String
        forkCount: Int
        description: String
        techStack: [Technology]
        platform: Platform
    }

    type Technology {
        name: String
        version: String
    }

    enum Platform {
        WEB
        MOBILE
        DESKTOP
        OTHER
    }

    type Query {
        getRepository(name: String!): Repository
    }

    input CourseInput {
        owner: String!
        name: String!
        forkCount: Int
        description: String
        techStack: [TechnologyInput]
        platform: Platform
    }

    input TechnologyInput {
        name: String
        version: String
    }

    type Mutation {
        createRepository(input: CourseInput): Repository
    }
`);

export default schema;
