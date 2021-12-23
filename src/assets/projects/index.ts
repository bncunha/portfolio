import { Project } from "src/models/Project";
import { Tech } from "src/models/Tech";

const Techs: {[key: string]: Tech} = {
  angular: new Tech('angular.png', 'Angular'),
  react: new Tech('react.png', 'React'),
  netlify: new Tech('netlify.png', 'Netlify'),
  heroku: new Tech('heroku.png', 'Heroku'),
  nestjs: new Tech('nest.png', 'Nest JS'),
  mysql: new Tech('mysql.png', 'MySQL'),
  js: new Tech('js.png', 'Javascript'),
}

export const projects: Project[] = [{
  name: 'Palpite Certo!',
  description: 'This is a webapp for a sweepstakes, an external API was used to update the game results.',
  image: 'bolao.png',
  techs: [
    Techs['angular'],
    Techs['netlify'],
    Techs['heroku'],
    Techs['nestjs'],
    Techs['mysql'],
  ],
  github: 'https://github.com/bncunha/bolao-web',
  demo: 'https://www.palpitecerto.com.br/',
}, {
  name: 'PS5 Design',
  description: 'Test project in react under a PS5 UI design created by Joshua Oluwagbemiga. ',
  image: 'ps5.png',
  techs: [
    Techs['react'],
    Techs['netlify'],
  ],
  github: 'https://github.com/bncunha/ps5-ui',
  demo: 'https://brave-einstein-847698.netlify.app/',
}, {
  name: 'Green Thumb',
  description: 'Test project with VanillaJS and responsive.',
  image: 'greenthumb.png',
  techs: [
    Techs['js'],
  ],
  github: 'https://github.com/bncunha/greenthumb',
  demo: 'http://bored-iron.surge.sh/',
}, {
  name: 'Payment Test',
  description: 'Test project to show skills with Angular and integration',
  image: 'pic-teste.png',
  techs: [
    Techs['angular'],
    Techs['netlify'],
  ],
  github: 'https://github.com/bncunha/picpay-desafio-frontend',
  demo: 'https://picpay-test.netlify.app/',
}]
