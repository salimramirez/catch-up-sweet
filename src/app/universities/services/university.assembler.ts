import { LogoApiService } from '../../shared/services/logo-api.service';
import { UniversityResource, UniversitiesResponse } from './universities.response';
import { University } from '../model/university.entity';

export class UniversityAssembler {
  static logoApiService: LogoApiService;

  static withLogoApiService(logoApiService: LogoApiService) {
    this.logoApiService = logoApiService;
    return this;
  }

  static toEntityFromResource(resource: UniversityResource): University {
    return {
      name: resource.name,
      country: resource.country,
      alpha_two_code: resource.alpha_two_code,
      domains: resource.domains[0],
      domainLogo: this.logoApiService.getUrlToLogo(resource),
      web_pages: resource.web_pages[0],
    }
  }

  static toEntitiesFromResponse(response: UniversitiesResponse | UniversityResource[]): University[] {
    if (Array.isArray(response)) {
      return response.map(university => this.toEntityFromResource(university));
    }

    if (response && response.universities && Array.isArray(response.universities)) {
      return response.universities.map(university => this.toEntityFromResource(university));
    }

    return [];
  }
}
