import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

function Post({ post }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page if post data is not available
    if (!post) {
      router.push('/');
    }
  }, [post, router]);

  if (!post) {
    return null; // or show a loading state
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
        <button onClick={() => router.back()}>Home</button>
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${ctx.query.pid}`
  );

  return {
    props: {
      post: response.data,
    },
  };
}

export default Post;
