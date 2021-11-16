import React, { useState } from 'react';
import Box from '@mui/material/Box';
import './modal.scss';
import Modal from '@mui/material/Modal';
import { AuthForm } from '../forms/authForm/AuthForm';
import { RegisterForm } from '../forms/registerForm/RegisterForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};

interface IModal {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BasicModal({ handleOpen, handleClose, open, setOpen }: IModal) {
  const [formType, setFormType] = useState<'register' | 'auth'>('auth');

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {formType == 'auth' ? (
            <AuthForm setFormType={setFormType} setOpen={setOpen} />
          ) : (
            <RegisterForm setFormType={setFormType} setOpen={setOpen} />
          )}
        </Box>
      </Modal>
    </div>
  );
}
