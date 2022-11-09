import { Controller, Get, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { request } from 'http';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  // @Get()
  // findAll(@Req() request: Request): string {
  //   return 'this action returns all cats';
  // }
  @Get('ab*cd')
  findAl() {
    return 'This route uses a wildcard';
  }
  @Post()
  @HttpCode(204)
  createe() {
    return 'Thsi action adds a new cat';
  }
  @Get()
  @Redirect('https://nestjs.com', 301)
  profile(): string {
    return 'nothing'
  }
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: any) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action return a #${params.id} cat`;
  }
}
