import { atoms, Atoms } from '../styles/atoms.css';

import { partitionObject, PartitionObject } from './partition-object';

export function partitionAtoms<T>(source: T): PartitionObject<T, Atoms> {
  return partitionObject(source, (_, key) =>
    atoms.properties.has(key as keyof Atoms),
  );
}
