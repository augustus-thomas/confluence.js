import { ContentPropertyUpdateRequest } from '../models';

export interface UpdateCommentPropertyById extends ContentPropertyUpdateRequest {
  /** The ID of the comment the property belongs to. */
  commentId: number;
  /** The ID of the property to be updated. */
  propertyId: number;
  /**
   * Due to JavaScript's max integer representation of 2^53-1, the type of any IDs returned in the response body for
   * this endpoint will be changed from a numeric type to a string type at the end of the deprecation period. In the
   * meantime, this query param can be passed to this endpoint to opt-in to this change now. See this
   * [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
   */
  serializeIdsAsStrings?: boolean;
}