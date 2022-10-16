import ParagraphHeroCta from "../paragraph/ParagraphHeroCta";
import ParagraphText from "../paragraph/ParagraphText";

const resolve = (component: any) => {
  if (component.__typename.includes(`ParagraphHeroCta`)) {
    return (
      <ParagraphHeroCta
        intro={component.intro}
        title={component.title}
        text={component.text}
        links={component.cta}
      />
    );
  }
  if (component.__typename.includes(`ParagraphText`)) {
    return (
      <ParagraphText
        title={component.title}
        text={component.textRich.processed}
      />
    );
  }

  return <></>;
};

export const componentResolver = (data = [] as any) => {
  const components: any = [];

  data.forEach((component: any) => {
    components.push(resolve(component));
  });

  return components;
};

export default componentResolver;