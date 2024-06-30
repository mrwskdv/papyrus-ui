export type PartitionObject<Source, Included> = [
  Partial<Included>,
  Omit<Source, keyof Included>,
];

export function partitionObject<Source, Included>(
  obj: Source,
  filterFn: (value: Source[keyof Source], key: keyof Source) => boolean,
): PartitionObject<Source, Included> {
  const included: Record<string, unknown> = {};
  const rest: Record<string, unknown> = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (filterFn(value as Source[keyof Source], key as keyof Source)) {
      included[key] = value;
    } else {
      rest[key] = value;
    }
  });

  return [included, rest] as PartitionObject<Source, Included>;
}
