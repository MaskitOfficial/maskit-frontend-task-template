export enum BoxOfficeType {
  THEATER = "THEATER",
  CONCERT_HALL = "CONCERT_HALL",
  SPORTS_STADIUM = "SPORTS_STADIUM",
  EXHIBITION_CENTER = "EXHIBITION_CENTER",
  MULTIPURPOSE_HALL = "MULTIPURPOSE_HALL",
  AMUSEMENT_PARK = "AMUSEMENT_PARK",
  LIBRARY = "LIBRARY",
  MUSEUM = "MUSEUM",
  ART_GALLERY = "ART_GALLERY",
  CONVENTION_CENTER = "CONVENTION_CENTER",
  CINEMA = "CINEMA",
  PERFORMANCE_CENTER = "PERFORMANCE_CENTER",
  CULTURAL_CENTER = "CULTURAL_CENTER",
  ART_CENTER = "ART_CENTER",
  SPORTS_CENTER = "SPORTS_CENTER",
  AUDITORIUM = "AUDITORIUM",
  OUTDOOR_VENUE = "OUTDOOR_VENUE",
}

export const BoxOfficeTypeLabel: Record<BoxOfficeType, string> = {
  [BoxOfficeType.THEATER]: "극장",
  [BoxOfficeType.CONCERT_HALL]: "콘서트홀",
  [BoxOfficeType.SPORTS_STADIUM]: "스포츠 경기장",
  [BoxOfficeType.EXHIBITION_CENTER]: "전시센터",
  [BoxOfficeType.MULTIPURPOSE_HALL]: "다목적홀",
  [BoxOfficeType.AMUSEMENT_PARK]: "놀이공원",
  [BoxOfficeType.LIBRARY]: "도서관",
  [BoxOfficeType.MUSEUM]: "박물관",
  [BoxOfficeType.ART_GALLERY]: "미술관",
  [BoxOfficeType.CONVENTION_CENTER]: "컨벤션센터",
  [BoxOfficeType.CINEMA]: "영화관",
  [BoxOfficeType.PERFORMANCE_CENTER]: "공연장",
  [BoxOfficeType.CULTURAL_CENTER]: "문화센터",
  [BoxOfficeType.ART_CENTER]: "아트센터",
  [BoxOfficeType.SPORTS_CENTER]: "체육관",
  [BoxOfficeType.AUDITORIUM]: "강당",
  [BoxOfficeType.OUTDOOR_VENUE]: "야외공연장",
};

export interface BoxOffice {
  _id: string;
  uuid: string;
  root_officer_uuid: string;
  company_name: string;
  company_logo_url?: string;
  company_address?: string;
  company_phone_number?: string;
  facilities: string[];
  created_at: Date;
  updated_at: Date;
}
