import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Header from "./Header";

test('should render title', () => {
  const component = render(<Header />)
  expect(component.container).toHaveTextContent('Emoji Search')
})
