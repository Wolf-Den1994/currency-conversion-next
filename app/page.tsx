import { Amount } from '@/components/Amount';
import { List } from '@/components/List';
import { Result } from '@/components/Result';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-10 p-24'>
      <h1 className='text-xl font-bold'>Currency converter</h1>
      <List />
      <Amount />
      <Result />
    </main>
  );
}
