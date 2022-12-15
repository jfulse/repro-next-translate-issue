import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/Home.module.css";
import { exampleUtility } from "@repro-next-translate-issue/example-package";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [...Array(10)].map((_, pageId) => ({
      params: { pageId: pageId.toString() },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{
  exampleString: string;
  id: string | string[] | undefined;
}> = async (ctx) => {
  const id = ctx.params?.pageId;
  const exampleString = exampleUtility();
  return {
    props: { exampleString, id },
    revalidate: 15,
  };
};

export default function Page({
  exampleString,
  id,
}: {
  exampleString: string;
  id: string | string[] | undefined;
}) {
  const { t, lang } = useTranslation();

  return (
    <div className={styles.container}>
      <Head>
        <title>Repro</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Test</h1>
        <p>Translated: "{t("exampleKey")}"</p>
        <p>Page id: "{id}"</p>
        <p>From utility package: "{exampleString}"</p>
        <p>Language: "{lang}"</p>
      </main>
    </div>
  );
}
