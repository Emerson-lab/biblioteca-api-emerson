import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { ReturnLoanDto } from './dto/return-loan.dto';

@Injectable()
export class LoansService {
  constructor(private prisma: PrismaService) { }

  async createLoan(data: CreateLoanDto) {
    const book = await this.prisma.book.findUnique({ where: { id: data.bookId } });
    if (!book) throw new BadRequestException('Book not found');
    if (!book.available) throw new BadRequestException('Book is not available');

    return this.prisma.$transaction([
      this.prisma.loan.create({
        data: {
          bookId: data.bookId,
          borrowerId: data.borrowerId,
          dueAt: data.dueAt,
        },
      }),
      this.prisma.book.update({
        where: { id: data.bookId },
        data: { available: false },
      }),
    ]);
  }

  async returnLoan(data: ReturnLoanDto) {
    const loan = await this.prisma.loan.findUnique({ where: { id: data.loanId } });
    if (!loan) throw new BadRequestException('Loan not found');
    if (loan.returnedAt) throw new BadRequestException('Loan already returned');

    return this.prisma.$transaction([
      this.prisma.loan.update({
        where: { id: data.loanId },
        data: { returnedAt: data.returnedAt },
      }),
      this.prisma.book.update({
        where: { id: loan.bookId },
        data: { available: true },
      }),
    ]);
  }

  async findAll() {
    return this.prisma.loan.findMany({ include: { book: true, borrower: true } });
  }

  async findOne(id: number) {
    return this.prisma.loan.findUnique({
      where: { id },
      include: { book: true, borrower: true },
    });
  }
}
