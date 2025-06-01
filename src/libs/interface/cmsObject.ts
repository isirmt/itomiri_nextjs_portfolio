export type CmsImage = {
  url: string;
  height: number;
  width: number;
}

export type Meta = {
  fieldId: string;
  thumbnail: CmsImage
}

export type NewsContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  meta: Meta;
};

export type WorksContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  workPublished: string;
  description: string;
  images: CmsImage[];
  links: string;
  meta: Meta;
};

export type ApiResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
