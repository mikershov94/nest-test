import { Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param() params, @Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return { id: params.id, cat: params.id };
  }

  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
  }
}
