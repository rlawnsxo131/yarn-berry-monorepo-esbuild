import Button from './Button';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      description: 'React.ReactNode',
    },
    // size: {
    //   control: {
    //     type: 'radio',
    //     options: ['small', 'medium', 'large'],
    //   },
    // },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'click',
  onClick: () => alert('a'),
};
