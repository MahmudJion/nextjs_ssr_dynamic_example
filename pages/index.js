import axios from 'axios';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = (props) => (
    <div className={styles.container}>
        <Head>
            <title>Nextjs Blog</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js Blog</a>
            </h1>

            <div className={styles.grid}>
                {props.posts.map((post, index) => {
                    return (
                        <Link
                            as={"/post/" + post.id}
                            href="/post/[pid]"
                            key={index}
                        >
                            <a className={styles.card}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </main>

        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
        </footer>
    </div>
);

Home.getInitialProps = async function () {

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10',
    )
    return {
        posts: response.data
    }
}

export default Home;
