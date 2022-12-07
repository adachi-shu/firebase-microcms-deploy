import { client } from "../../libs/client";

export default function BlogId({ fire }) {
  return (
    <main>
      <h1>{fire.title}</h1>
      <p>{fire.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${fire.body}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "fire" });

  const paths = data.contents.map((content) => `/fire/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "fire", contentId: id });

  return {
    props: {
      fire: data,
    },
  };
};