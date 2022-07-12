import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
  render(<BoxList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('should add a new box', () => {
  const { getByLabelText, queryByText, getByText, getByTestId } = render(<BoxList />);
  expect(queryByText('Add a Box')).toBeInTheDocument();
  expect(getByLabelText('Box Color')).toBeInTheDocument();
  expect(queryByText('X')).not.toBeInTheDocument();

  const addButton = getByText("Add Box");
  fireEvent.click(addButton);
  expect(queryByText('X')).toBeInTheDocument();
  
  const divTestID = getByTestId("box-testid");
  expect(divTestID).toHaveStyle(`
  width: 50%;
  height: 400px;
`);
});

it('should remove a box', () => {
  const { queryByText, getByText } = render(<BoxList />);
  const addButton = getByText("Add Box");
  fireEvent.click(addButton);

  const removeButton = getByText("X");
  fireEvent.click(removeButton);
  expect(queryByText('X')).not.toBeInTheDocument();
});