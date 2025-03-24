type InputPropsType = {
  labelfor: string;
  label: string;
  type: string;
  value?: string;
};

const Input = ({ labelfor, label, type, value }: InputPropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium" htmlFor={labelfor}>
        {label}
      </label>
      <input
        className="bg-black/30 rounded-[6px] p-1"
        type={type}
        value={value}
      />
    </div>
  );
};

export default Input;
