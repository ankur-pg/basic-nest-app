import { Body, Controller, Get, Post } from "@nestjs/common"
import { SearchService } from "./search.service";

@Controller()
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/search')
  getSearchResults(): string {
    return this.searchService.getSearchResults()
  }

  @Post('/search')
  addSearchData(@Body('title') searchTitle: string): string {
    console.log(searchTitle)
    return searchTitle
  }
}
