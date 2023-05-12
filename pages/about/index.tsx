import { ArticleJsonLd, NextSeo } from "next-seo";
import React from "react";
import { useRouter } from "next/router";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG } from "../../utils/constants";
// import nextI18NextConfig from "../../next-i18next.config.js";

type Props = {
  // Add custom props here
};

const About = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <NextSeo
        title="Manage SEO in NextJS with Next SEO"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
        canonical="www.example.com/next-seo-blog"
        openGraph={{
          type: "article",
          article: {
            publishedTime: "2022-06-21T23:04:13Z",
            modifiedTime: "2022-01-21T18:04:43Z",
            authors: [
              "https://www.example.com/authors/@firstnameA-lastnameA",
              "https://www.example.com/authors/@firstnameB-lastnameB",
            ],
            tags: ["Tag A", "Tag B", "Tag C"],
          },
          url: "www.example.com/next-seo-blog",
          // images: {
          //   url: "https://www.test.ie/images/cover.jpg",
          //   width: 850,
          //   height: 650,
          //   alt: "Photo of text",
          // },
          site_name: "Next Blog",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url="https://example.com/blog"
        title="Manage SEO in NextJS with Next SEO"
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        datePublished="2022-06-21T23:04:13Z"
        dateModified="2022-06-21T23:04:13Z"
        authorName="Author Name"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
      />
      <div>
        <div>About page</div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ["common"])),
  },
});

export default About;
