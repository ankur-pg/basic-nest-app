import { Injectable } from "@nestjs/common"

@Injectable()
export class SearchService {
  getSearchResults(): string {
    return 'Test'
  }
}