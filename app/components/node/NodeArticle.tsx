import { Fragment } from "react";
import Title from "~/components/field/Title";
import { componentResolver } from "~/components/helpers/componentResolver";

interface NodeArticleProps {
  title: string;
  path: string;
  components: {
    __typename: string;
    id: string;
  };
}

export default function NodeArticle({ node }: { node: NodeArticleProps }) {
  const components = componentResolver(node.components) as [];
  return (
    <>
      <Title>{node.title}</Title>
      {components.map((component: any, index: number) => {
        return <Fragment key={index}>{component}</Fragment>;
      })}
    </>
  );
}
