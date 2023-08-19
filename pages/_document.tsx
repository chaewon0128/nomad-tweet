import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Ysabeau+Infant:ital,wght@1,900&display=swap" rel="stylesheet" as="style" />
            </Head>
            <body className='min-h-screen border m-auto from-[#fffc00] to-[#ffffff] w-[500px]'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

