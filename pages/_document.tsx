import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Ysabeau+Infant:ital,wght@1,900&display=swap" rel="stylesheet" />
                    <title>Tweety</title>
                </Head>
                <body className='min-h-screen border border-[#4286f4] m-auto from-[#fffc00] to-[#ffffff] w-[500px]'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;