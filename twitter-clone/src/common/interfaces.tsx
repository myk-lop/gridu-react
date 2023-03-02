export interface IUser {
  id: string;
  fullName: string;
  email: string;
}

export interface ITweet {
  id?: string;
  author_id: string;
  text: string;
}
