import * as sys_bin from './bin/system';
import * as port_bin from './bin'

var bin = { ...sys_bin, ...port_bin }

export const commandExists = (command: string) => {
  const commands = ['clear', ...Object.keys(bin)];
  return commands.indexOf(command.split(' ')[0].toLowerCase()) !== -1;
};
