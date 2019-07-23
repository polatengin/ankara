import { Chalk } from 'chalk';

export interface ChalkWithRandom extends Chalk {
  random(text: string): string;
}

const chalk: ChalkWithRandom = require('chalk');

chalk.random = (str: string) =>
  chalk.hex(Math.floor(Math.random() * 16777215).toString(16))(str);

export default chalk;
module.exports = chalk;

export interface IPackageJsonFile extends Object {
  readonly name: string;
  readonly version: string;
  readonly description: string;
  readonly keywords?: string[];
  readonly homepage?: string;
  readonly bugs?: string|IBugs;
  readonly license?: string;
  readonly author?: string|IAuthor;
  readonly contributors?: string[]|IAuthor[];
  readonly files?: string[];
  readonly main?: string;
  readonly bin?: string|IBinMap;
  readonly man?: string|string[];
  readonly directories?: IDirectories;
  readonly repository?: string|IRepository;
  readonly scripts?: IScriptsMap;
  readonly config?: IConfig;
  readonly dependencies?: IDependencyMap;
  readonly devDependencies?: IDependencyMap;
  readonly peerDependencies?: IDependencyMap;
  readonly optionalDependencies?: IDependencyMap;
  readonly bundledDependencies?: string[];
  readonly engines?: IEngines;
  readonly os?: string[];
  readonly cpu?: string[];
  readonly preferGlobal?: boolean;
  readonly private?: boolean;
  readonly publishConfig?: IPublishConfig;
}

export interface IAuthor {
  name: string;
  email?: string;
  homepage?: string;
}

export interface IBinMap {
  [commandName: string]: string;
}

export interface IBugs {
  email: string;
  url: string;
}

export interface IConfig {
  name?: string;
  config?: Object;
}

export interface IDependencyMap {
  [dependencyName: string]: string;
}

export interface IDirectories {
  lib?: string;
  bin?: string;
  man?: string;
  doc?: string;
  example?: string;
}

export interface IEngines {
  node?: string;
  npm?: string;
}

export interface IPublishConfig {
  registry?: string;
}

export interface IRepository {
  type: string;
  url: string;
}

export interface IScriptsMap {
  [scriptName: string]: string;
}
