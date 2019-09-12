import { storiesOf } from '@storybook/angular';
// @ts-ignore
import markdown from './button.notes.md';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import './button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => ({
    template: `<button class="btn btn-primary">{{ label }}</button>`,
    props: {
      label: text('Label', 'Native Button')
    }
  }), { notes: { markdown } })
  .add('Secondary', () => ({
    template: `<button class="btn btn-secondary">{{ label }}</button>`,
    props: {
      label: text('Label', 'Native Button')
    }
  }), { notes: { markdown } });
