import { getJestProjectsAsync } from '@nx/jest';
import type { Config } from 'jest';

const config = async (): Promise<Config> => {
  const projects = await getJestProjectsAsync();
  return {
    projects,
  };
};

export default config;
