import { atoms, Atoms } from '../styles/atoms.css';

import { partitionObject, PartitionObject } from './partition-object';

// eslint-disable-next-line @typescript-eslint/ban-types
export function partitionAtoms<T extends {}>(
  source: T,
): PartitionObject<T, Atoms> {
  return partitionObject(source, (_, key) =>
    atoms.properties.has(key as keyof Atoms),
  );
}
