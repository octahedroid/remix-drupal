import { Link } from '@remix-run/react'
import Image from "remix-image";
import cn from "classnames";
import type {MediaImage} from '~/@types/entities';

interface CoverImageProps {
  title: string;
  path: string;
  image: MediaImage;
  width: number;
  height: number;
}

export default function CoverImage({ title, path, image, width, height }: CoverImageProps) {
  const RemixImage = (
      <Image
        src={image.mediaImage.url}
        alt={`Cover for ${title}`}
        className={cn("shadow-small", {
          "hover:shadow-medium transition-shadow duration-200": path,
        })}
        width={width}
        height={height}
        responsive={[
          {
            size: { width: 160, height: 120 },
            maxWidth: 600,
          },
          {
            size: { width: 200, height: 150 },
            maxWidth: 960,
          },
        ]}
        options={{
          quality:75,
        }}
        style={{
          backgroundSize: 'cover',
          backgroundColor: '#eee',
          width: '100%',
          height: 'auto',
        }}
        loading="lazy"
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
