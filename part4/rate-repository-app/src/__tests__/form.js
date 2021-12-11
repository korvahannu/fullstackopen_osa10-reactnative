import React, { useState } from 'react';
import { Text, TextInput, Pressable, View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit({ username, password });
  };

  return (
    <View>
      <View>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
          testID="usernameField"
        />
      </View>
      <View>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          testID="passwordField"
        />
      </View>
      <View>
        <Pressable onPress={handleSubmit} testID="submitButton">
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

describe('Form', () => {

  it('calls function provided by onSubmit prop after pressing the submit buttin', () => {

    const mock = jest.fn();
    const { getByTestId } = render(<Form onSubmit={mock} />);

    fireEvent.changeText(getByTestId('usernameField'), 'hannu');
    fireEvent.changeText(getByTestId('passwordField'), 'password');
    fireEvent.press(getByTestId('submitButton'));

    expect(mock).toHaveBeenCalledTimes(1);

    expect(mock.mock.calls[0][0]).toEqual({
      username: 'hannu',
      password: 'password'
    });

  });

});