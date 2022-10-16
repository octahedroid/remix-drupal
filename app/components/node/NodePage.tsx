import { Fragment } from "react";
import Title from "~/components/field/Title";
import { componentResolver } from "~/components/helpers/componentResolver";

interface NodePageProps {
  title: string;
  showTitle: boolean;
  path: string;
  components: {
    __typename: string;
    id: string;
  };
}

export default function NodePage({ node }: { node: NodePageProps }) {
  const components = componentResolver(node.components) as [];
  return (
    <>
      { node.showTitle && <Title>{node.title}</Title>}
      {components.map((component: any, index: number) => {
        return <Fragment key={index}>{component}</Fragment>;
      })}
    </>
  );
}
