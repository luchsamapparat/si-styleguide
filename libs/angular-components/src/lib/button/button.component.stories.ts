import { storiesOf, moduleMetadata } from '@storybook/angular';
// @ts-ignore
import markdown from './button.component.notes.md';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import './button.component';
import { ButtonComponent } from './button.component';

storiesOf('Angular Components', module)
  .addDecorator(
    moduleMetadata({
      declarations: [
        ButtonComponent
      ]
    })
  )
  .addDecorator(withKnobs)
  .add('Button', () => ({
    template: `<si-ng-button [variant]="variant" [label]="label"></si-ng-button>`,
    props: {
      label: text('Label', 'My Button Label'),
      variant: radios('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
      }, 'primary')
    }
  }), { notes: { markdown } })
