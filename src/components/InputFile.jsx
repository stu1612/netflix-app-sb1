export default function InputFile({ imageSelect, label }) {
  return (
    <div className="input-field">
      <label>
        {label}
        <input
          type="file"
          onChange={imageSelect}
          accept="image/gif, image/jpeg, image/png"
          required={true}
        />
      </label>
    </div>
  );
}
