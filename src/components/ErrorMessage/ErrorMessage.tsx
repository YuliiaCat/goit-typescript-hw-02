import React from 'react';
import style from './ErrorMessage.module.css';

type Props = {
  error: string;
};

const ErrorMessage: React.FC<Props> = ({ error }) => <p className={style.text}>{error}</p>

export default ErrorMessage