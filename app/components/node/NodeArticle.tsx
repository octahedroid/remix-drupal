import { Fragment } from "react";
import Cover from "~/components/Cover";
import type { MediaImage, Author } from '~/@types/entities';
import { componentResolver } from "~/components/helpers/componentResolver";

interface NodeArticleProps {
  title: string;
  path: string;
  image: MediaImage;
  created: string;
  author: Author;
  components: {
    __typename: string;
    id: string;
  };
}

export default function NodeArticle({ node }: { node: NodeArticleProps }) {
  const components = componentResolver(node.components) as [];
  return (
    <>
      <Cover
        title={node.title}
        image={node.image}
        date={node.created}
        author={node.author}
      />
      {components.map((component: any, index: number) => {
        return <Fragment key={index}>{component}</Fragment>;
      })}
    </>
  );
}
