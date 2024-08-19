import { Amount } from '@/components/Amount';
import { List } from '@/components/List';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-row items-center justify-center gap-20 p-24'>
      <List />
      <Amount />
    </main>
  );
}
