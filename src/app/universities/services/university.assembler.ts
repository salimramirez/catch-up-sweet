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

  static toEntitiesFromResponse(resources: UniversityResource[]): University[] {
    return resources.map(resource => this.toEntityFromResource(resource));
  }
}

