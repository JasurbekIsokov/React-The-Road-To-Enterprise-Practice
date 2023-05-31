import { useState } from 'react';
import BusinessCardForm from './BusinessCardForm';
import BusinessCardPreview from './BusinessCardPreview';

type BusinessCardEditorProps = {};

type BusinessCardState = {
  avatarFile?: File | null;
  name: string;
  phoneNumber: string;
  description: string;
  address: string;
};

const BusinessCardEditor = (props: BusinessCardEditorProps) => {
  const [avatarPreview, setAvatarPreview] = useState('');

  const [form, setForm] = useState<BusinessCardState>({
    avatarFile: null,
    name: '',
    phoneNumber: '',
    description: '',
    address: '',
  });

  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setForm((state) => ({
      ...state,
      avatarFile: file,
    }));

    if (!file) {
      setAvatarPreview('');
      return;
    }

    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        const avatarPreview = reader.result as string;
        setAvatarPreview(avatarPreview);
      },
      false
    );

    reader.readAsDataURL(file);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='p-8 container mx-auto grid grid-cols-2 gap-8'>
      <BusinessCardForm
        name={form.name}
        address={form.address}
        phoneNumber={form.phoneNumber}
        description={form.description}
        onInputChange={onInputChange}
        onFileUpload={onFileUpload}
      />

      <BusinessCardPreview
        name={form.name}
        address={form.address}
        avatar={avatarPreview}
        description={form.description}
        phoneNumber={form.phoneNumber}
      />
    </div>
  );
};
export default BusinessCardEditor;
