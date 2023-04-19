export class UpdateDeedDto {
  readonly name?: string;
  readonly description?: string;
  readonly status?: 'pending' | 'in progress' | 'done';
}
