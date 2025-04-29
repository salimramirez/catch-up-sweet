export interface UniversitiesResponse {
  status: string;
  universities: UniversityResource[];
}

export interface UniversityResource {
  name: string;
  country: string;
  alpha_two_code: string;
  domains: string;
  domainLogo: string;
  web_pages: string;
}
