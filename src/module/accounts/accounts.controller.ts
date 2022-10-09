import { Body, Controller, Get } from '@nestjs/common';
import { CreateAccountDto } from './dtos/accounts.dto';
import { AccountsService } from './accounts.service';
import { DataSource } from 'typeorm';

@Controller('account')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Get()
  async createAccount(@Body() body: CreateAccountDto) {
    const result = this.accountsService.createAccount(body);
    return result;
  }
}
