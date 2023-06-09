import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureArticles = ({ img, title, time, summary, link }) => {
  return (
    <li>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <Link href={link} target="_blank" >
        <h2 className="capitalize text-2xl font-bold my-2">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="World Can Change The World!" className="mb-16" />
          <ul className="grid grid-col-2 gap-16">
            <li>Feature Articles-1</li>
            <li>Feature Articles-1</li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
