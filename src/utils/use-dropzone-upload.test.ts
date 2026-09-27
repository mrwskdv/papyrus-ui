import { renderHook } from './test-utils';
import { useDropzoneUpload } from './use-dropzone-upload';

interface Item {
  id: string;
}

const getName = (item: Item) => `Item ${item.id}`;
const getUrl = (item: Item) => `https://example.com/${item.id}.jpg`;

describe('useDropzoneUpload', () => {
  describe('Given an uncontrolled hook with a defaultValue', () => {
    describe('When it is rendered', () => {
      it('Then filesState should reflect the defaultValue', () => {
        const { result } = renderHook(() =>
          useDropzoneUpload<Item>({
            defaultValue: { id: '1' },
            getName,
            getUrl,
          }),
        );

        expect(result.current.filesState).toHaveLength(1);
        expect(result.current.filesState[0]).toMatchObject({
          name: 'Item 1',
        });
      });
    });
  });

  describe('Given a controlled hook with a value prop', () => {
    describe('When the value prop changes', () => {
      it('Then filesState should sync to the new value', () => {
        const { result, rerender } = renderHook(
          ({ value }: { value: Item }) =>
            useDropzoneUpload<Item>({ getName, getUrl, value }),
          { initialProps: { value: { id: '1' } } },
        );

        expect(result.current.filesState[0]).toMatchObject({
          name: 'Item 1',
        });

        rerender({ value: { id: '2' } });

        expect(result.current.filesState).toHaveLength(1);
        expect(result.current.filesState[0]).toMatchObject({
          name: 'Item 2',
        });
      });
    });

    describe('When the value prop changes in multiple mode', () => {
      it('Then filesState should sync to include every item in the new value', () => {
        const { result, rerender } = renderHook(
          ({ value }: { value: Item[] }) =>
            useDropzoneUpload<Item, true>({
              getName,
              getUrl,
              multiple: true,
              value,
            }),
          { initialProps: { value: [{ id: '1' }] } },
        );

        expect(result.current.filesState).toHaveLength(1);

        rerender({ value: [{ id: '1' }, { id: '2' }] });

        expect(result.current.filesState).toHaveLength(2);
        expect(result.current.filesState.map(f => f.name)).toEqual([
          'Item 1',
          'Item 2',
        ]);
      });
    });
  });
});
