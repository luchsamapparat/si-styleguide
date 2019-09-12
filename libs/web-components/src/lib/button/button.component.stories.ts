import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { storiesOf, moduleMetadata } from '@storybook/angular';
// @ts-ignore
import markdown from './button.component.notes.md';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import './button.component';

storiesOf('Web Components', module)
  .addDecorator(
    moduleMetadata({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
  )
  .addDecorator(withKnobs)
  .add('Button', () => ({
    template: `<si-button [variant]="variant" [label]="label"></si-button>`,
    props: {
      label: text('Label', 'My Button Label'),
      variant: radios('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
      }, 'primary')
    }
  }), { notes: { markdown } })
