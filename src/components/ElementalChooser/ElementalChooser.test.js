import React from "react";
import { render, fireEvent } from '@testing-library/react';
import ElementalChooser from "./ElementalChooser";

it("left arrow click changes icon", async () => {
  const { getByTestId } = render(<ElementalChooser />);
  const leftButton = getByTestId('left')
  const iconBefore = getByTestId('icon').outerHTML

  fireEvent.click(leftButton)

  const iconAfter = getByTestId('icon').outerHTML
  expect(iconBefore).not.toBe(iconAfter)
})

it("right arrow click changes icon", async () => {
  const { getByTestId } = render(<ElementalChooser />);
  const rightButton = getByTestId('right')
  const iconBefore = getByTestId('icon').outerHTML

  fireEvent.click(rightButton)

  const iconAfter = getByTestId('icon').outerHTML
  expect(iconBefore).not.toBe(iconAfter)
})

it("one left arrow click calls onChange once", async () => {
  const onChange = jest.fn()
  const { getByTestId } = render(<ElementalChooser onChange={onChange} />);
  const leftButton = getByTestId('left')

  fireEvent.click(leftButton)

  expect(onChange).toBeCalledTimes(1)
})

it("one right arrow click calls onChange once", async () => {
  const onChange = jest.fn()
  const { getByTestId } = render(<ElementalChooser onChange={onChange} />);
  const rightButton = getByTestId('right')

  fireEvent.click(rightButton)

  expect(onChange).toBeCalledTimes(1)
})
