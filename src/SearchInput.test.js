import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import SearchInput from './SearchInput';

test('Should render an input textbox', () => {
  const component = render(<SearchInput />)
  expect(component.getByRole('textbox')).toBeVisible()
})