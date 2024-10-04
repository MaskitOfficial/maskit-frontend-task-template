export enum FacilityType {
  HALL = "HALL",
  VENUE = "VENUE",
}

export interface Facility {
  _id: string;
  uuid: string;
  box_office_uuid: string;
  name: string;
  type: FacilityType;
  description?: string;
  totalSeats?: number;
  parentFacility?: string;
  subFacilities: string[];
}
