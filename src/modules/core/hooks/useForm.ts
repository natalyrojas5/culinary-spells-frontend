import { useState, ChangeEvent } from "react";

type FormValues = { [key: string]: string };

const useForm = (initialValues: FormValues = {}) => {
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
};

export default useForm;
