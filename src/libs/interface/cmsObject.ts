export type Meta = {
  fieldId: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  }
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

export type ApiResponse = {
  contents: NewsContent[];
  totalCount: number;
  offset: number;
  limit: number;
};
