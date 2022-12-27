// List of commands that do not require API calls

import * as bin from './system/index';
import config from '../../../config.json';

// About
export const about = async (args: string[]): Promise<string> => {
    return `Hi, I am ${config.name}. 
  Welcome to my website!
  More about me:
  'sumfetch' - short summary.
  'resume' - my latest resume.
  'readme' - my github readme.`;
  };

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

export const portrait = async (args: string[]): Promise<string> => {
  window.open(`${config.portrait_url}`);
  return 'Opening portrait...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};