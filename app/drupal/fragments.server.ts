const LinkFragment = {
  uri: true,
  link: true,
  title: true
}

const TextFragment = {
  format: true,
  value: true,
  processed: true
}

const ImageFragment = {
  url: true,
  width: true,
  height: true
}

const ImageStyleFragment = {
  url: true,
  width: true,
  height: true,
  style: true
}

export const MediaImageFragment = {
  mediaImage: {
    ...ImageFragment,
    styles: {
      ...ImageStyleFragment
    }
  }
}

export const ParagraphHeroCtaFragment = {
  id: true,
  status: true,
  created: true,
  cta: {
    ...LinkFragment
  },
  intro: true,
  text: true,
  title: true
}

export const ParagraphTextFragment = {
  id: true,
  status: true,
  created: true,
  textRich: {
    ...TextFragment
  },
  title: true
}

export const ParagraphCodeBlockFragment = {
  title: true,
  code: true,
  language: true,
  showLineNumbers: true
}

export const ParagraphHeroTextFragment = {
  intro: true,
  text: true,
  title: true
}

export const ParagraphImageFragment = {
  image: {
    ...MediaImageFragment
  }
}
