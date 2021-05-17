import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import ExampleDialog from '../components/exampleDialog'
import MyNavBar from '../components/myNavBar'
import AlertDismissible from '../components/alertDismissible'
import 'bootstrap/dist/css/bootstrap.css'

function Home() {
    return (
        <Layout>
            <Head>
                <title>Elvis Silva</title>
            </Head>
            <MyNavBar />
            <h1 className="title">
                Ir para{' '}
                <Link href="/posts/first-post">
                    <a>primeiro post</a>
                </Link>
            </h1>
            <ExampleDialog />
            <AlertDismissible />
        </Layout>
    )
}

export default Home