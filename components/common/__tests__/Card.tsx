import { Card } from '../Card';
import { render } from '@testing-library/react';

test('render <Card /> without crash', () => {
  render(<Card />);
});
