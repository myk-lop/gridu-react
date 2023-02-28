export interface IUser {
  id: string;
  fullName: ""; // TODO: provide a type for this string
  email: ""; // TODO: provide a type for this string
}

export interface ITweet {
  id?: string;
  author_id: string;
  text: string;
}
