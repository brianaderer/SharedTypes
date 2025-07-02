import {Item} from '../Item';

export interface Winestate {
  producers?: Item[];
  cuvees?: Item[];
  vintages?: Item[];
  classes?: Item[];
  type?: Item[];
  colors?: Item[];
  countries?: Item[];
  regions?: Item[];
  appellations?: Item[];
  grapes?: Item[];
}
