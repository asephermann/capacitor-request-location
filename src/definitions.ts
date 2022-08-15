export interface RequestLocationPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
