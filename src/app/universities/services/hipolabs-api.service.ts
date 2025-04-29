import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogoApiService } from '../../shared/services/logo-api.service';
import { map, Observable } from 'rxjs';
import { University } from '../model/university.entity';
import { UniversitiesResponse} from './universities.response';
import { environment } from '../../../environments/environment';
import { UniversityAssembler } from './university.assembler';

@Injectable({
  providedIn: 'root'
})
export class HipolabsApiService {
  private baseUrl = environment.hipolabsProviderApiBaseUrl;
  private hipolabsEndpoint = environment.hipolabsProviderUniversitiesEndpointPath;

  constructor(private http: HttpClient, private logoApiService: LogoApiService) { }

  getUniversities(): Observable<University[]> {
    return this.http.get<UniversitiesResponse>(`${this.baseUrl}${this.hipolabsEndpoint}`).pipe(
      map(response => UniversityAssembler.withLogoApiService(this.logoApiService).toEntitiesFromResponse(response))
    );
  }
}
