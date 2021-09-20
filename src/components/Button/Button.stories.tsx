import Button from './Button';

export default {
  title: 'Button',
};

export const active = (): JSX.Element => (
  <Button variant="primary" onClick={() => alert('Clicked')}>
    Active button
  </Button>
);
