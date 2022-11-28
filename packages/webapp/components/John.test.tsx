import { render } from '@testing-library/react';
import John from './John';

function renderJohn() {
  const result = render(<John />);
  const JohnText = () => result.getByText('john');

  return {
    JohnText,
  };
}

describe('<John />', () => {
  it('render', () => {
    const { JohnText } = renderJohn();

    expect(JohnText()).toBe;
  });
});
