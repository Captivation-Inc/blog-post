import Head from 'next/head'
import Header from '../components/Header'

export default function Layout({title, keywords, description,children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Header />
            {children}
        </div>        
    )
}

Layout.defaultProps = {
    title: 'Blog',
    description: 'blog post',
    keywords: 'A blog'
}