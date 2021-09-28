# Changelog

### 1.2.0

- Cloud API
  - `archivePages` method added to `Content`.
  - `publishLegacyDraft` request fixed in `Content` class.
  - `publishSharedDraft` request fixed in `Content` class.
  - `downloadAttachment` method added to `ContentAttachments`.
  - `descendantsOfType` renamed to `getDescendantsOfType` in `ContentChildrenAndDescendants`.
  - `permissionCheck` renamed to `checkContentPermission` in `ContentPermissions`.
  - `key` property added to `getContentProperties` request in `ContentProperties`.
  - Added `Experemental` API.
  - `accessType` property added to `getGroups` request in `Group`.
  - `removeGroupById` method added to `Group`.
  - `getGroup` renamed to `getGroupByName` in `Group`.
  - `getGroupsSearch` renamed to `searchGroups` in `Group`.
  - `accountId` property added to `addUserToGroupByGroupId` in `Group`.
  - `accountId` property added to `addUserToGroup` in `Group`.
  - `getTaskById` method added to `InlineTasks`.
  - `updateTaskById` method added to `InlineTasks`.
  - `GetRelationship` renamed to `getRelationship` in `Relation`.
  - `delete` renamed to `deleteRelationship` in `Relation`.
  - `search` renamed to `searchByCQL` in `Search`.
  - `userSearch` renamed to `searchUser` in `Search`.
  - `horizontalHeader`, `spaceReference`, `links` properties added to `updateLookAndFeelSettings` in `Settings`.
  - `permissions` property added to `createPrivateSpace` in `Space`.
  - `type` and `status` properties added to `updateSpace` in `Space`.
  - `addPermission` renamed to `addPermissionToSpace` in `SpacePermissions`.
  - `addCustomContentPermissions` method added to `SpacePermissions`.
  - `space` property added to `createSpaceProperty` in `SpaceProperties`.

### 1.1.3

- Vulnerabilities fixed
- Small params fixes in content creating

### 1.1.2

- `expand` property added to `Content.getContent` request.
- `expand` property added to `Content.createContent` request.
- `Content.updateContent` request body fixed. ([#6](https://github.com/MrRefactoring/confluence.js/issues/6) Thanks [eddiegroves](https://github.com/eddiegroves) for catching)

### 1.1.1

- `expand` property added to `ContentAttachments.getAttachments`. ([#4](https://github.com/MrRefactoring/confluence.js/issues/4) Thanks [eddiegroves](https://github.com/eddiegroves) for catching)

### 1.1.0

- Server API added

### 1.0.1

- Minor internal improvements
- New endpoint added

### 1.0.0

- Initial upload