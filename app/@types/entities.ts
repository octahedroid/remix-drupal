export interface Image {
  url: string;
  width: number;
  height: number;
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