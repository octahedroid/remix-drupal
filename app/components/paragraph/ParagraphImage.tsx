import type { MediaImage } from '~/@types/entities';

interface ParagraphImageProps {
  image: MediaImage
}

export default function ParagraphImage({ image }: ParagraphImageProps) {

  return (
      <div className="flex items-center justify-center">
        <img
          src={image.mediaImage.url}
          alt={`Cover`}
        />
      </div>
  );
}
