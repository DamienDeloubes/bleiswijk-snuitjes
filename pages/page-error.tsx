import Layout from "@/components/layout/Layout";

import PageError from "@/components/sections/innerpages/PageError";
export default function Page404() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={2}>
        <PageError />
      </Layout>
    </>
  );
}
