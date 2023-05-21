export interface GetCustomContentById {
  /**
   * The ID of the custom content to be returned. If you don't know the custom content ID, use Get Custom Content by
   * Type and filter the results.
   */
  id: number;
  /**
   * The content format types to be returned in the `body` field of the response. If available, the representation will
   * be available under a response field of the same name under the `body` field.
   *
   * Note: If the custom content body type is `storage`, the `storage` and `atlas_doc_format` body formats are able to
   * be returned. If the custom content body type is `raw`, only the `raw` body format is able to be returned.
   */
  'body-format'?: {};
  /**
   * Allows you to retrieve a previously published version. Specify the previous version's number to retrieve its
   * details.
   */
  version?: number;
  /**
   * Due to JavaScript's max integer representation of 2^53-1, the type of any IDs returned in the response body for
   * this endpoint will be changed from a numeric type to a string type at the end of the deprecation period. In the
   * meantime, this query param can be passed to this endpoint to opt-in to this change now. See this
   * [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
   */
  serializeIdsAsStrings?: boolean;
}