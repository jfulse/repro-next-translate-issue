import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/Home.module.css";

export default function Home({ exampleString }: { exampleString: string }) {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>Repro</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Home</h1>
      </main>
    </div>
  );
}
