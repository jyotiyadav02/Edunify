import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }


import Layout from '../components/Layout'; // Example import for Layout

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;