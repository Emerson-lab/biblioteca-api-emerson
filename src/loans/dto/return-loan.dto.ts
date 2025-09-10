import { IsNotEmpty, IsNumber } from 'class-validator';

export class ReturnLoanDto {
  @IsNumber()
  loanId: number;

  @IsNotEmpty()
  returnedAt: Date;
}
