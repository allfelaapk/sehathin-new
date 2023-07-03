import { Button } from '@mui/material';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

test('renders button component', () => {
  render(<Button data-testid="buttonForm">Test</Button>);

  const button = screen.getByTestId('buttonForm');
  fireEvent.click(button);
});
