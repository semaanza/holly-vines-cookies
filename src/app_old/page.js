"use client";
import { HeroBanner } from "@/components";
import React from "react";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";

export default function HomePage(props) {
  console.log("testing");
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <HeroBanner {...data?.page} description={"This will be the description."} />
  );
}

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.filename}.md` };

  try {
    console.log("getting request");
    const res = await client.queries.post({ relativePath: "hello-world.md" });
    console.log(res);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
    },
  };
};

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();

  return {
    paths: postsListData.data.postConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename },
    })),
    fallback: false,
  };
};
