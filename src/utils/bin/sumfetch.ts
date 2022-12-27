import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'johann') {
    return `                                                  
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░
░░░░░░░░░░░░▒▒▓▓███▓██████▓▓▒░░░░░░░░░░░
░░░░░░░░░░▒▓▓███▓▓▓▓▓▓▓█████▓▒▒░░░░░░░░░
░░░░░░░░░▒▓██▓▓▒▒▒▒▒▒▒▓▓▓▓████▓▒░░░░░░░░
░░░░░░░░░▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██▓▒░░░░░░░     sumfetch: display summary
░░░░░░░░▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▓▓███▒▒░░░░░░    -----------
░░░░░░░░▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓██▓▒░░░░░░     ${config.name}
░░░░░░░░▓▓▒▒▒▓▓▓▓▒▒▒▒▒▓▓▓▓▓▓▓▓██▓▒░░░░░░     ${config.job}  
░░░░░░░░▓▓▒▒▒▓▓▓▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓█▓▓░░░░░░     ${config.location}
░░░░░░░▒▓▓▒▒▒▓▓▓▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓█▓▓░░░░░░    
░░░░░░░▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▓▓▓▓▓▓▓░░░░░░     <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
░░░░░░░▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▒▒▒▓▓▓▓▓▓▓░░░░░░    -----------
░░░░░░░░░▒▓▒▒▒▓▒▒▒▒▓▓▓▓▓▓▒▓▓▓▓▓▓▒░░░░░░░     CONTACT
░░░░░░░░░░▒▒▒▒▒▓▓▒▒▒▒▓▓▓▓▓▒▓▓▓▓▒▒░░░░░░░     <u><a href="mailto:${config.email}" target="_blank">${config.email} </a></u>
░░░░░░░░░░▒▓▒▒▒▒▓▓▒▒▒▓▓▓▓▒▒▓▓▓▓▒░░░░░░░░     <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
░░░░░░░░░░░▒▓▒▒▒▒▒▒▒▒▓▓▓▒▓▓▓▓▓▒░░░░░░░░░     <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
░░░░░░░░░░▒▓▓▓▓▒▒▒▒▒▒▒▒▒▓▓▓█▓▓█▓▓░░░░░░░
░░░░░░░░▒▓██▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓███▓░░░░░░
░░░░░░░▒▓████▓▒▒▒▒▒▒▓▓▓▓▓▓▓▓██████▓░░░░░
░░▒▒▒▓████████▓▓▒▒▒▒▒▒▒▓▓█████████████▓▓
▓█████████████████▓▓▓▓██████████████████
████████████████████████████████████████
████████████████████████████████████████
███████████████████████▓████████████████
███████████████████████▓████████████████
████████████████████████████████████████
<u><a href="${config.portrait_url}" target="_blank">Open Portrait</a></u> 

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > L I V E T E R M        ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀

`;
  }
};

export default sumfetch;
