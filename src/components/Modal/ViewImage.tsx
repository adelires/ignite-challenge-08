import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent m="auto" maxW="900px" maxH="600px">
        <ModalBody p="0">
          <Image src={imgUrl} maxW="900px" maxH="600px" />
        </ModalBody>
        <ModalFooter h="32px" bgColor="pGray.800" borderEndEndRadius="6px">
          <Link
            href={imgUrl}
            isExternal
            fontSize="14px"
            mr="auto"
            color="pGray.50"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
