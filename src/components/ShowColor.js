import React, { useState } from 'react';

export default function ShowColor() {
    const [rgb, setRgb] = useState({color: ''});
  
    const showTextAndBack = (color) => {
      setRgb({color});
      document.body.style.backgroundColor = color;
    }
  
    const handleInput = ({ target }) => {
      if (target.value.length < 7) {
        setRgb({color: ''});
        return null;
      } else if (!target.value.startsWith('#') || target.value.length > 7) {
        setRgb({color: 'Ошибка!'});
        return null;
      }
  
      const value = target.value.slice(1);
      const converted = hexToRGB(value);
      converted !== null ? showTextAndBack(converted) : setRgb({color: 'Ошибка!'});
    };
  
    return (
      <div className="input-output-div">
        <input type="text" onChange={handleInput} />
        <div>{rgb.color}</div>
      </div>
    );
  }
  
  function hexToRGB(hex) {
    const shorthandRegex = /^([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
  }