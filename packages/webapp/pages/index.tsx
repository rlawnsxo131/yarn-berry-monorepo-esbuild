import { Button } from '@packages/coreui';

import John from '@/components/John';

export default function App() {
  return (
    <div>
      <Button onClick={() => alert('hello')}>click</Button>
      <John />
    </div>
  );
}
