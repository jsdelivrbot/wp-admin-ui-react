import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import notes from './README.md';

storiesOf('Button/Button', module)
  .add('standard', withNotes(notes)(() => <Button>Button</Button>))
  .add('secondary', () => <Button modifiers={['secondary']}>Button</Button>)
  .add('primary', () => <Button modifiers={['primary']}>Button</Button>)
  .add('large', () => <Button modifiers={['large']}>Button</Button>)
  .add('small', () => <Button modifiers={['small']}>Button</Button>)
  .add('hero', () => <Button modifiers={['primary', 'hero']}>Button</Button>)
  .add('as link', () => (
    <p>
      <Button modifiers={['link']}>Link</Button> |{' '}
      <Button modifiers={['link', 'link-error']}>Error</Button> |{' '}
      <Button modifiers={['link', 'link-warning']}>Warning</Button>
    </p>
  ))
  .add('with icon', () => <Button dashicon="wordpress">Button</Button>);

storiesOf('Button/ButtonGroup', module).add('standard', () => (
  <ButtonGroup>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </ButtonGroup>
));
