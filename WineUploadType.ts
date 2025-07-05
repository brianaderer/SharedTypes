export type SlugTypes =
    'class' | 'type' | 'color' | 'grapes' | 'subtype';

export type UploadData = {
    slug?: SlugTypes;
    label: string;
    key: string;
    dbKey?: string;
    value?: any;
}

export type WineUploadType = {
    '0': UploadData | null;
    '1'?: UploadData;
    '2'?: UploadData;
    '3'?: UploadData;
    'country': UploadData | null;
    'regions'?: UploadData;
    'appellations'?: UploadData;
    'subAppellations'?: UploadData;
}