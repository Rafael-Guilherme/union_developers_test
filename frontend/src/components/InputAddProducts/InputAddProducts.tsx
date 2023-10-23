import './InputAddProducts.scss'

interface InputAddProductsProps {
    label: string
    type: string
    placeholder: string
    name: string
    value: string
    onChange: () => void
}

const InputAddProducts = ({ label, type, placeholder, name, value, onChange }: InputAddProductsProps) => {
  return (
    <div className='container-input'>
      <label className="label-field" htmlFor={name}>{label}</label>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputAddProducts;
