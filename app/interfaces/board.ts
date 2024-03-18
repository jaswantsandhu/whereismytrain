export interface Board {
  std: string;
  etd: string;
  platform: string;
  operator: string;
  operatorCode: string;
  serviceType: string;
  serviceID: string;
  rsid: string;
  origin: Origin;
  destination: Destination;
  subsequentCallingPoints: SubsequentCallingPoints;
}

export interface Location {
  locationName: string;
  crs: string;
}

export interface Origin {
  location: Location;
}

export interface Destination {
  location: Location;
}

export interface SubsequentCallingPoints {
  callingPointList: CallingPointList;
}

export interface CallingPointList {
  callingPoint: CallingPoint[];
}

export interface CallingPoint {
  locationName: string;
  crs: string;
  st: string;
  et: string;
}
