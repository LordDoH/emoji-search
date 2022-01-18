import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import EmojiResultRow from "./EmojiResultRow";

test('Should render Click to copy emoji', () => {
  const component = render(<EmojiResultRow title="Nombre" symbol="Hol" />)
  expect(component.getByText('Click to copy emoji')).toHaveTextContent('Click to copy emoji')
})

test('Should render title', () => {
  const component = render(<EmojiResultRow title="Nombre" symbol="Hol" />)
  expect(component.getByText('Nombre')).toHaveTextContent('Nombre')
})