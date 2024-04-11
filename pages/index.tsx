import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import { Layout, TopBlogPost } from "components";
import { NextSeo } from "next-seo";
import { allPosts } from "contentlayer/generated";

const Home: NextPage<{ posts: Post[] | null }> = ({ posts }) => {
  return (
    <Layout>
      <>
        <NextSeo title="Home" description="Home" />
        <TopBlogPost posts={posts} />
      </>
    </Layout>
  );
};

export function getStaticProps() {
  const posts = allPosts.map((post) => {
    return {
      title: post.title,
      description: post.description,
      publishedAt: post.publishedAt,
      slug: post.slug,
    };
  });

  return { props: { posts: posts } };
}

export default Home;
