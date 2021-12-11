import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInForm } from './SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      
      const mock = jest.fn();
      const { getByTestId } = render(<SignInForm onSubmit={mock} />);
  
      fireEvent.changeText(getByTestId('fieldUsername'), 'hannu');
      fireEvent.changeText(getByTestId('fieldPassword'), 'password');
      fireEvent.press(getByTestId('submitButton'));

      await waitFor(() => {
        expect(mock).toHaveBeenCalledTimes(1);

        expect(mock.mock.calls[0][0]).toEqual({
          username: 'hannu',
          password: 'password'
        });
      });
    });
  });
});