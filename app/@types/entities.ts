export interface Image {
  url: string;
  width: number;
  height: number;
  styles: ImageStyle[];
}

export interface ImageStyle {
  url: string;
  width: number;
  height: number;
  style: string;
}

export interface MediaImage {
  mediaImage: Image;
}

export interface Author {
  displayName: string;
  picture: MediaImage;
}

export interface Body {
  summary: string;
}