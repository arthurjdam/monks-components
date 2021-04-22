import Head from 'next/head';
import { HelloWorld } from '@arthurjdam/monks-components-core';

export default function Home(): React.ReactElement {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <HelloWorld />
    </div>
  );
}
