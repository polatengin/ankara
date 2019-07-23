#!/usr/bin/env node

import chalk, { IPackageJsonFile } from './extensions';
import figlet from 'figlet';
import program from 'commander';
import { getRandomColor, getRandomAlloy, getRandomAnimal, getRandomBird, getRandomCapital } from './dictionaries';

const packageFile: IPackageJsonFile = require('../package.json');

function sanitizeCodeName(codeName: string): string {
  let result = codeName;

  result = result.toLocaleLowerCase();

  result = result.replace(/\s+/g, '-');
  result = result.replace('--', '-');

  result = result.slice(0, -1);

  return result;
}

console.clear();

console.log(
  chalk.random(
    figlet.textSync(packageFile.name, { horizontalLayout: 'full' })
  )
);

program
	.version(packageFile.version)
  .description(packageFile.description)
  .option('-c, --color', 'Add random color name')
  .option('-a, --alloy', 'Add random alloy name')
  .option('-n, --animal', 'Add random animal name')
  .option('-b, --bird', 'Add random bird name')
  .option('-p, --capital', 'Add random capital name')
  .parse(process.argv);

const color: boolean = program.color;
const alloy: boolean = program.alloy;
const animal: boolean = program.animal;
const bird: boolean = program.bird;
const capital: boolean = program.capital;

let randomCodeName: string = '';

if (color) {
  const random = getRandomColor();
  randomCodeName = randomCodeName + random + '-';
}

if (alloy) {
  const random = getRandomAlloy();
  randomCodeName = randomCodeName + random + '-';
}

if (animal) {
  const random = getRandomAnimal();
  randomCodeName = randomCodeName + random + '-';
}

if (bird) {
  const random = getRandomBird();
  randomCodeName = randomCodeName + random + '-';
}

if (capital) {
  const random = getRandomCapital();
  randomCodeName = randomCodeName + random + '-';
}

randomCodeName = sanitizeCodeName(randomCodeName);

console.log(randomCodeName);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
