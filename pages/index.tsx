import { NextSeo } from "next-seo";
import Head from "next/head";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG } from "../utils/constants";

import HomePage from "./home";

type Props = {
  // Add custom props here
};

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div style={{ height: "100%" }}>
      <NextSeo
        title="Foolist Creative"
        description="This will be the page meta description"
        canonical="https://www.canonicalurl.ie/"
        openGraph={{
          url: "www.foolist.vn",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
        }}
      />
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ["common"])),
  },
});

export default Home;
