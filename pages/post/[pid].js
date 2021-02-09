import axios from 'axios';
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

function Post ({ post }) {
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
                <Link href="/">
                    <button>Home</button>
                </Link>
            </main>
        </div>
    );
}

Post.getInitialProps = async (ctx) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ctx.query.pid}`,
    )
    return {
        post: response.data
    }
}

export default Post