export class CreateDeedDto {
  readonly name: string;
  readonly description?: string;
  readonly status = 'pending';
}
