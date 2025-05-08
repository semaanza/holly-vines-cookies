"use client";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { Layout } from "../components/Layout/Layout";
import { Blocks } from "../components/renderer";

export default function Page(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout rawData={data} data={data?.global}>
      <Blocks {...data?.page} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.page}.json` };

  try {
    console.log("getting request");
    const res = await client.queries.page({
      relativePath: `${params.page}.json`,
    });
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
  const pagesListData = await client.queries.pageConnection();

  return {
    paths: pagesListData.data.pageConnection.edges.map((page) => ({
      params: { page: page.node._sys.filename },
    })),
    fallback: false,
  };
};
