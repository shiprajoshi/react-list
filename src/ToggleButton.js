export const ToggleButton=({label, onChange})=>{
   return <div className="toggleButton">
        <label for="toggle">{label}</label>
        <input id="toggle" type="range" min="0" max="1"
        onChange={onChange}
        ></input>
    </div>
}