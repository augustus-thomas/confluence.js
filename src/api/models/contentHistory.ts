import { User } from './user';
import { Version } from './version';
import { UsersUserKeys } from './usersUserKeys';
import { GenericLinks } from './genericLinks';

export interface ContentHistory {
  latest: boolean;
  createdBy: User;
  createdDate: string;
  lastUpdated?: Version;
  previousVersion?: Version;
  contributors?: {
    publishers?: UsersUserKeys;
  };
  nextVersion?: Version;
  _expandable?: {
    lastUpdated?: string;
    previousVersion?: string;
    contributors?: string;
    nextVersion?: string;
  };
  _links?: GenericLinks;
}