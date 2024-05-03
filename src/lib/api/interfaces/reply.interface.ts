import type { profile } from "./data.interface";

export interface replyData <T = undefined> {
  message: string;
  data: T;
}

export interface replyProfile extends replyData<profile> {}