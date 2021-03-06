import React from 'react';
import { Text, View } from 'react-native';
import { render } from '@testing-library/react-native';

const Greeting = ({name}) => (
  <View>
    <Text testID="greetingText">Hello {name}!</Text>
  </View>
);

describe('Greeting', () => {

  it('renders a greeting message based on the name prop', () => {

    const { debug, getByTestId } = render(<Greeting name="Hannu" />);

    debug();

    expect(getByTestId('greetingText')).toHaveTextContent('Hello Hannu!');

  });

});