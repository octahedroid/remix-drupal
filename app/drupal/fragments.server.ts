import type {
  ImageGenqlSelection,
  ImageStyleGenqlSelection,
  LinkGenqlSelection,
  MediaImageGenqlSelection,
  ParagraphCodeBlockGenqlSelection,
  ParagraphHeroCtaGenqlSelection,
  ParagraphHeroTextGenqlSelection,
  ParagraphImageGenqlSelection,
  ParagraphTextGenqlSelection,
  TextGenqlSelection
} from '~/@types/gen';

const LinkFragment: LinkGenqlSelection = {
  uri: true,
  link: true,
  title: true,
}

const TextFragment: TextGenqlSelection = {
  format: true,
  value: true,
  processed: true,
}

const ImageStyleFragment: ImageStyleGenqlSelection = {
  url: true,
  width: true,
  height: true,
  style: true
}

const ImageFragment: ImageGenqlSelection = {
  url: true,
  width: true,
  height: true,
  styles: ImageStyleFragment,
}

export const MediaImageFragment: MediaImageGenqlSelection = {
  mediaImage: ImageFragment
}

export const ParagraphHeroCtaFragment: ParagraphHeroCtaGenqlSelection = {
  id: true,
  status: true,
  created: true,
  cta: LinkFragment,
  intro: true,
  text: true,
  title: true
}

export const ParagraphTextFragment: ParagraphTextGenqlSelection = {
  id: true,
  status: true,
  created: true,
  textRich: TextFragment,
  title: true
}

export const ParagraphCodeBlockFragment: ParagraphCodeBlockGenqlSelection = {
  title: true,
  code: true,
  language: true,
  showLineNumbers: true
}

export const ParagraphHeroTextFragment: ParagraphHeroTextGenqlSelection = {
  intro: true,
  text: true,
  title: true,
}

export const ParagraphImageFragment: ParagraphImageGenqlSelection = {
  image: MediaImageFragment,
}