import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/bhoov/khoov-github', // Update to point to your repository
  user: {
   name: 'Benjamin Hoover', // update to use your name
   email: 'benhoover34@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);