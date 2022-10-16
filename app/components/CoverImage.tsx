import { Link } from '@remix-run/react'
import cn from "classnames";
import type {MediaImage} from '~/@types/entities';

interface CoverImageProps {
  title: string;
  path: string;
  image: MediaImage
}

export default function CoverImage({ title, image, path }: CoverImageProps) {
  const img = (
    <img
      src={image.mediaImage.url}
      alt={`Cover for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": path,
      })}
      width={640}
      height={480}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {path ? (
        <Link to={path} aria-label={title}>
          {img}
        </Link>
      ) : (
        img
      )}
    </div>
  );
}
