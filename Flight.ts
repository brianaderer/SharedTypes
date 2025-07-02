import {Item} from '../Item';
export interface Flight {
  id: null | string;
  wines: Array<string>;
  selectedWine: Item;
  name: string;
  currentVersion: null | number;
  versions: Item;
  owner: string;
  rep_contact: Item | null;
  timestamp: string | number;
  distributorName: string | null;
  distributorId?: string | undefined;
}
