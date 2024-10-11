//import { FoodModel } from '../../../share/food-data';

export interface ReactionModel {
  toy: ToyModel //to get toy owner
  reactionName: string; //like, love, dislike
}

export interface ToyModel {
  toyOwner: string;
  toyName: string;
  ageType: string; //apetizer, main, desert, misc
  toyCountry: string;
  toyCreated: Date;
  toyPrice: number;
  currency: string;
  detailsOfToy: string;
  imageUrl: string; // TODO: update with FileResourceDisplayModel and multiple images
  isLike?: boolean;
  isLove?: boolean;
  isDislike?: boolean;
  reaction: Reactions;
  ratings?: number;
  notification?: Notification;
  active: boolean;
}

export type Reactions = {
  numberLikes: number;
  numberLoves: number;
  numberDislikes: number;
};

export type Notification = {
  message: string;
  sender: string;
  receiver: string;
  date: Date;
};
export interface ShareLinks {
  title: string;
  link: string;
}

export type ShareToyInfo = { url: string; description: string; tags: string };
