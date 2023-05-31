import React, { useState } from 'react';
import styles from '../../BusinessCardForm.module.css';

type BusinessCardState = {
  avatarFile?: File | null;
  name: string;
  phoneNumber: string;
  description: string;
  address: string;
};

type BusinessCardFormProps = {
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  phoneNumber: string;
  description: string;
  address: string;
};

const BusinessCardForm = (props: BusinessCardFormProps) => {
  // const [form, setForm] = useState<BusinessCardState>({
  //   avatarFile: null,
  //   name: '',
  //   phoneNumber: '',
  //   description: '',
  //   address: '',
  // });

  // const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm((state) => ({
  //     ...state,
  //     avatarFile: e.target.files?.[0],
  //   }));
  // };

  // const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm((state) => ({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const {
    name,
    phoneNumber,
    description,
    address,
    onInputChange,
    onFileUpload,
  } = props;

  return (
    <div className='shadow-md p-8'>
      <h2 className='text-2xl font-semibold mb-4'>Business Card Form</h2>
      <form>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Avatar</label>
          <input type='file' onChange={onFileUpload} />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Name</label>
          <input
            className={styles.formInput}
            type='text'
            name='name'
            value={name}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Description</label>
          <input
            className={styles.formInput}
            type='text'
            name='description'
            value={description}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Phone number</label>
          <input
            className={styles.formInput}
            type='text'
            name='phoneNumber'
            value={phoneNumber}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Address</label>
          <input
            className={styles.formInput}
            type='text'
            name='address'
            value={address}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default BusinessCardForm;
