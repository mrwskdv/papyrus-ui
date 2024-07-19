import { useState } from 'react';

import { Box } from '../box';
import { Button } from '../button';
import { Flex } from '../flex';

import { Dialog, DialogProps } from './dialog';
import { DialogSize } from './dialog.types';

export default {
  title: 'Feedback/Dialog',
  component: Dialog,
};

export function Base(args: DialogProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  return (
    <Dialog {...args} isOpen={isOpen} onClose={toggleDialog}>
      <Dialog.Trigger>
        <Button onClick={toggleDialog}>Open Dialog</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Basic Dialog</Dialog.Title>
          <Dialog.Close />
        </Dialog.Header>

        <Dialog.Body>
          <Dialog.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            lectus convallis, ultrices dui non, varius massa. Quisque tempus
            convallis purus, ut interdum nulla venenatis vitae. Proin imperdiet
            tellus purus, id convallis leo porttitor ac.
            <br />
            <br />
            Phasellus maximus facilisis mauris, vel pretium lacus scelerisque a.
            Ut mauris dui, aliquet ut felis quis, aliquam vehicula massa. In
            eget ipsum eleifend, facilisis metus ac, luctus nunc. Duis tristique
            laoreet ipsum nec cursus. Sed quis bibendum odio, ac laoreet quam.
          </Dialog.Description>
        </Dialog.Body>
        <Dialog.Footer>
          <Button onClick={toggleDialog}>OK</Button>
          <Button variant="tertiary" onClick={toggleDialog}>
            Cancel
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}

export function Sizes(args: DialogProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [dialogSize, setDialogSize] = useState<DialogSize>('md');

  function handleOpenSmallDialog() {
    setOpen(true);
    setDialogSize('sm');
  }

  function handleOpenMediumDialog() {
    setOpen(true);
    setDialogSize('md');
  }

  function handleOpenLargeDialog() {
    setOpen(true);
    setDialogSize('lg');
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Flex>
        <Box mr={4}>
          <Button variant="secondary" onClick={handleOpenSmallDialog}>
            Open small Dialog
          </Button>
        </Box>

        <Box mr={4}>
          <Button variant="secondary" onClick={handleOpenMediumDialog}>
            Open medium Dialog
          </Button>
        </Box>

        <Box>
          <Button variant="secondary" onClick={handleOpenLargeDialog}>
            Open large Dialog
          </Button>
        </Box>
      </Flex>

      <Dialog
        {...args}
        isOpen={open && dialogSize === 'sm'}
        size="sm"
        onClose={handleClose}
      >
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Small Dialog</Dialog.Title>
            <Dialog.Close />
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
              lectus convallis, ultrices dui non, varius massa.
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Button variant="primary" onClick={handleClose}>
              OK
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>

      <Dialog
        {...args}
        isOpen={open && dialogSize === 'md'}
        size="md"
        onClose={handleClose}
      >
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Medium Dialog</Dialog.Title>
            <Dialog.Close />
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
              lectus convallis, ultrices dui non, varius massa. Quisque tempus
              convallis purus, ut interdum nulla venenatis vitae. Proin
              imperdiet tellus purus, id convallis leo porttitor ac.
              <br />
              <br />
              Phasellus maximus facilisis mauris, vel pretium lacus scelerisque
              a. Ut mauris dui, aliquet ut felis quis, aliquam vehicula massa.
              In eget ipsum eleifend, facilisis metus ac, luctus nunc. Duis
              tristique laoreet ipsum nec cursus. Sed quis bibendum odio, ac
              laoreet quam.
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Button variant="primary" onClick={handleClose}>
              OK
            </Button>

            <Button variant="tertiary" onClick={handleClose}>
              Cancel
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>

      <Dialog
        {...args}
        isOpen={open && dialogSize === 'lg'}
        size="lg"
        onClose={handleClose}
      >
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Large Dialog</Dialog.Title>
            <Dialog.Close />
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
              lectus convallis, ultrices dui non, varius massa. Quisque tempus
              convallis purus, ut interdum nulla venenatis vitae. Proin
              imperdiet tellus purus, id convallis leo porttitor ac. Phasellus
              maximus facilisis mauris, vel pretium lacus scelerisque a. Ut
              mauris dui, aliquet ut felis quis, aliquam vehicula massa. In eget
              ipsum eleifend, facilisis metus ac, luctus nunc. Duis tristique
              laoreet ipsum nec cursus. Sed quis bibendum odio, ac laoreet quam.
              Donec dignissim in est non gravida.
              <br />
              <br />
              Vivamus auctor interdum hendrerit. Pellentesque non tortor eu arcu
              volutpat pharetra a eget ipsum. Morbi suscipit mi ut justo
              commodo, at semper risus eleifend. Curabitur pharetra auctor mi,
              vel egestas magna pellentesque ac. Suspendisse augue nulla, porta
              et sem in, consequat dictum augue. Duis quis facilisis leo. Morbi
              porta purus eu tincidunt cursus. Praesent efficitur fringilla quam
              eget pellentesque. Duis urna nunc, pharetra sit amet leo at,
              congue egestas elit. Vivamus congue aliquam libero, a euismod
              sapien viverra vitae. Integer libero justo, sodales non tincidunt
              sed, blandit eget lacus. Aliquam tempor nec ex non eleifend.
              <br />
              <br />
              Praesent accumsan non sem ut rhoncus. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae;
              Praesent congue pharetra ipsum, ultricies pellentesque lorem
              consectetur eget. Cras finibus, nisl vel sollicitudin ullamcorper,
              leo odio bibendum elit, at imperdiet ligula ipsum nec tortor.
              Vivamus ultrices lectus nunc, quis cursus mi laoreet vel. Sed id
              lectus placerat, tempor lectus a, mattis nunc. Phasellus aliquet
              nibh metus, vitae iaculis sem pretium ac. Vestibulum vulputate
              dapibus accumsan. Sed pharetra ligula at finibus volutpat.
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Button variant="primary" onClick={handleClose}>
              OK
            </Button>
            <Button variant="tertiary" onClick={handleClose}>
              Cancel
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
}
