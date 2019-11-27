export const ActionTypes = {
  LOAD_REVIEWS: '[Review] Load Reviews',
  LOAD_REVIEWS_SUCCESS: '[Review] Load Reviews Success',
  LOAD_REVIEWS_FAIL: '[Review] Load Reviews Fail',

  CREATE_REVIEW: '[Review] Create Review',
  CREATE_REVIEW_SUCCESS: '[Review] Create Review Success',
  CREATE_REVIEW_FAIL: '[Review] Create Review Fail',
};

export class LoadReviewsAction {
  static type = ActionTypes.LOAD_REVIEWS;

  constructor(public payload?: any) {
  }
}
export class LoadReviewsSuccessAction {
  static type = ActionTypes.LOAD_REVIEWS_SUCCESS;

  constructor(public payload: any) {
  }
}
export class LoadReviewsFailAction {
  static type = ActionTypes.LOAD_REVIEWS_FAIL;

  constructor(public payload: any) {
  }
}



export class CreateReviewAction {
  static type = ActionTypes.CREATE_REVIEW;

  constructor(public payload?: any) {
  }
}
export class CreateReviewSuccessAction {
  static type = ActionTypes.CREATE_REVIEW_SUCCESS;

  constructor(public payload: any) {
  }
}
export class CreateReviewFailAction {
  static type = ActionTypes.CREATE_REVIEW_FAIL;

  constructor(public payload: any) {
  }
}
