import Modal from "react-modal";
import { useEffect } from "react";
import axios from "axios";

const ActorModal = ({ isActorModalOpen, closeActorModal, actorId }) => {
  useEffect(() => {
    axios();
  }, [actorId]);
  return (
    <Modal isOpen={isActorModalOpen} onRequestClose={closeActorModal}>
      <p>{actorId}</p>
    </Modal>
  );
};

export default ActorModal;
