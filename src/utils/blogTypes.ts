export type BlogPost = {
  title: string;
  date: string;
  content: string;
  summary: string;
  id: string;
};

export type RawBlogPost = {
    title: string;
    markdown: string;
    summary: string;
    date: string;
}