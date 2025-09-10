import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateLoanDto {
  @IsNumber()
  bookId: number;

  @IsNumber()
  borrowerId: number;

  @IsNotEmpty()
  dueAt: Date;
}
