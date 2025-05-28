"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Head from "next/head";

const PageNotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 800);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Redirecting to the homepage."
        />
      </Head>
      <main
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
        role="alert"
        aria-label="Page Not Found"
      >
        <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
        <p className="mt-4 text-lg text-gray-700">Redirecting to Home page...</p>
      </main>
    </>
  );
};

export default PageNotFound;
