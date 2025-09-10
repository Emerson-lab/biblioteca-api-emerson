import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  author?: string;

  @IsOptional()
  category?: string;
}
