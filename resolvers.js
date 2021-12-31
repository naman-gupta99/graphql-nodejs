class Repository {
  constructor(name, { owner, forkCount, description, techStack, platform }) {
    this.owner = owner;
    this.name = name;
    this.forkCount = forkCount;
    this.description = description;
    this.techStack = techStack;
    this.platform = platform;
  }
}

const repositories = {};

const resolvers = {
  getRepository: ({ name }) => {
    return repositories[name];
  },
  createRepository: ({ input }) => {
    const { name, owner, forkCount, description, techStack, platform } = input;
    const repository = new Repository(name, {
      owner,
      forkCount,
      description,
      techStack,
      platform,
    });
    repositories[name] = repository;
    return repository;
  },
};

export default resolvers;
