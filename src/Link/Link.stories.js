import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Link from './Link';
import readme from './README.md';

storiesOf('Link', module)
  .addDecorator(withReadme(readme))
  .add('standard', () => (
    <p>
      This is <Link href="/">a link</Link>
    </p>
  ));
