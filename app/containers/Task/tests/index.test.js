/**
 *
 * Tests for Task1
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Task1 from '../index';

describe('<Task1 />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<Task1 dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render an <div> tag', () => {
    const {
      container: { firstChild },
    } = render(<Task1 />);
    expect(firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const {
      container: { firstChild },
    } = render(<Task1 />);
    expect(firstChild.hasAttribute('class')).toBe(true);
  });

  it('should render an <h1/> tag', () => {
    const { getByTestId } = render(<Task1 />);
    expect(getByTestId('clock-display').tagName).toBe('H1');
  });

  // it('Should render and match the snapshot', () => {
  //   const {
  //     container: { firstChild },
  //   } = render(<Task1 />);
  //   expect(firstChild).toMatchSnapshot();
  // });

  it('clock initial display should be current time', () => {
    const { getByTestId } = render(<Task1 />);
    expect(getByTestId('clock-display').tagName).toBe('H1');
  });
});
