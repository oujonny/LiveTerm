// List of commands that do not require API calls

import * as sys_bin from './index';
import * as port_bin from '../index';
import config from '../../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const system_commands = Object.keys(sys_bin).sort().join(', ');
  var system_c = '';
  for (let i = 1; i <= Object.keys(sys_bin).sort().length; i++) {
    if (i % 7 === 0) {
      system_c += Object.keys(sys_bin).sort()[i - 1] + '\n';
    } else {
      system_c += Object.keys(sys_bin).sort()[i - 1] + ' ';
    }
  }
  var portfolio_c = '';
  for (let i = 1; i <= Object.keys(port_bin).sort().length; i++) {
    if (i % 7 === 0) {
      portfolio_c += Object.keys(port_bin).sort()[i - 1] + '\n';
    } else {
      portfolio_c += Object.keys(port_bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome to my LiveTerm Portfolio! 
  
Here are all the available portfolio commands:

${portfolio_c}

and the system commands:

${system_c}

[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
[ctrl+l]: clear line.

Type 'sumfetch' to display summary.
`;
};

// Search
export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};
export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is the real thing!`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vim.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
██████╗ ██╗   ██╗     ██╗ ██████╗ ███╗   ██╗███╗   ██╗██╗   ██╗
██╔═══██╗██║   ██║     ██║██╔═══██╗████╗  ██║████╗  ██║╚██╗ ██╔╝
██║   ██║██║   ██║     ██║██║   ██║██╔██╗ ██║██╔██╗ ██║ ╚████╔╝ 
██║   ██║██║   ██║██   ██║██║   ██║██║╚██╗██║██║╚██╗██║  ╚██╔╝  
╚██████╔╝╚██████╔╝╚█████╔╝╚██████╔╝██║ ╚████║██║ ╚████║   ██║   
  ╚═════╝  ╚═════╝  ╚════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝   ╚═╝   
                                                                  
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
