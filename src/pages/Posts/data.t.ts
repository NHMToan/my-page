import { Post } from 'generated/graphql';

export interface PostData extends Post {
  image: string;
  filesource: string;
}
