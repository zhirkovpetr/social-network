import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { DialogItem } from '../../components/dialog-item/DialogItem';
import { ROUTERS } from '../../constants/constants';
import { useAppSelector } from '../../hooks/ReduxHooks';

import s from './Dialogs.module.css';

export const Dialogs: React.FC = () => {
  const { dialogs } = useAppSelector(state => state.dialogsSlice);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${ROUTERS.DIALOGS}${Object.entries(dialogs).slice(0, 3)[0][0]}`);
  }, [navigate]);

  return (
    <div className={s.dialogs}>
      <DialogItem friendsDialogs={dialogs} />
    </div>
  );
};
