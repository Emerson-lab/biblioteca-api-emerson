import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { ReturnLoanDto } from './dto/return-loan.dto';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) { }

  @Post()
  create(@Body() data: CreateLoanDto) {
    return this.loansService.createLoan(data);
  }

  @Post('return')
  returnBook(@Body() data: ReturnLoanDto) {
    return this.loansService.returnLoan(data);
  }

  @Get()
  findAll() {
    return this.loansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loansService.findOne(Number(id));
  }
}
