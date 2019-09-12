import { configure } from '@storybook/angular';

function loadStories() {
  const req = require.context('../libs', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
