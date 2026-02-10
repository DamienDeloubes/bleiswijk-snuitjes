import { Layout } from "@/components/layout/layout";

import PageError from "@/components/sections/innerpages/PageError";

export default function Page() {
  return (
    <Layout headerStyle={4}>
      <PageError />
    </Layout>
  );
}
