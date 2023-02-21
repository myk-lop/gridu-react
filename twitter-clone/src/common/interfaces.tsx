export interface IUser {
  id: string;
  fullName: "";
  email: "";
}

export interface ITweet {
  id?: string;
  author_id: string;
  text: string;
}
