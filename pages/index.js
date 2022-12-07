import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ fire }) {
  return (
    <div>
      <ul>
        {fire.map((fire) => (
          <li key={fire.id}>
            <Link href={`/fire/${fire.id}`}>
              {fire.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "fire" });

  return {
    props: {
      fire: data.contents,
    },
  };
};