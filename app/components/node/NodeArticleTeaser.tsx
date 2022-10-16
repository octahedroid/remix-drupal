import { Link } from '@remix-run/react'
import type { MediaImage, Author, Body } from '~/@types/entities';
import Avatar from "~/components/Avatar";
import Date from "~/components/Date";
import CoverImage from "~/components/CoverImage";

interface NodeArticleTeaserProps {
  title: string;
  image: MediaImage;
  created: string;
  body: Body;
  author: Author;
  path: string;
}

export default function NodeArticleTeaser({
  title,
  image,
  created,
  body,
  author,
  path,
}: NodeArticleTeaserProps) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} path={path} image={image} width={800} height={600} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link prefetch='intent' to={path} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Avatar name={author.displayName} picture={author.picture} />
      </div>
      <div className="text-lg mb-4">
        <Date dateString={created} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{body.summary}</p>
    </div>
  );
}
