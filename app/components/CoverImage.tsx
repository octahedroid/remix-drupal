import { Link } from '@remix-run/react'
import Image from "remix-image";
import cn from "classnames";
import type {MediaImage} from '~/@types/entities';

interface CoverImageProps {
  title: string;
  path: string;
  image: MediaImage
}

export default function CoverImage({ title, image, path }: CoverImageProps) {
  const RemixImage = (
      <Image
        src={image.mediaImage.url}
        alt={`Cover for ${title}`}
        className={cn("shadow-small", {
          "hover:shadow-medium transition-shadow duration-200": path,
        })}
        responsive={[
          {
            size: { width: 160, height: 120 },
            maxWidth: 320,
          },
          {
            size: { width: 320, height: 240 },
            maxWidth: 400,
          },
        ]}
        options={{
          quality:75,
        }}
        dprVariants={[1, 3]}
      />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {path ? (
        <Link prefetch='intent' to={path} aria-label={title}>
          {RemixImage}
        </Link>
      ) : (
        RemixImage
      )}
    </div>
  );
}
