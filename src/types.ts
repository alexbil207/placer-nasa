export interface IMeteor {
  name: string;
  id: string;
  nametype: string;
  recclass: string;
  mass: string;
  fall: string;
  year: string;
  reclat: string;
  reclong: string;
  geolocation: ICoords;
}

export interface ICoords {
  type: string;
  coordinates: number[];
}

export interface IFilter {
  year: string | null;
  mass: string | null;
}
