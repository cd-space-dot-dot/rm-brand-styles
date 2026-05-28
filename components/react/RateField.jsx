// components/react/RateField.jsx
// Reusable numeric input that commits on blur / Enter (so typing never fights a
// formatter) with an optional %/$ adornment. Wraps MUI's TextField with RM brand
// structure. Stores a base value; `scale` maps display <-> stored — e.g. scale=100
// shows a stored 0.025 as "2.5" with a "%" adornment.
import React, { useEffect, useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';

/**
 * RateField - numeric field for rates/amounts that commits on blur.
 *
 * @param {Object} props
 * @param {string} props.label - Field label
 * @param {number} props.value - Stored value (base units; for percent pass the decimal, e.g. 0.025)
 * @param {number} [props.scale=1] - Display multiplier (100 for percent, 1 for currency/plain)
 * @param {'%'|'$'} [props.adornment] - Optional unit adornment
 * @param {string} [props.helperText] - Helper text under the field
 * @param {function} props.onCommit - Called with the new stored value on blur/Enter
 * @param {string} [props.size='small'] - MUI TextField size
 * @param {Object} [props.sx] - sx overrides
 *
 * @example
 * <RateField label="Current rate" value={0.075} scale={100} adornment="%"
 *   onCommit={(v) => setRate(v)} />
 */
export function RateField({
  label,
  value,
  scale = 1,
  adornment,
  helperText,
  onCommit,
  size = 'small',
  sx = {},
  ...otherProps
}) {
  const toDisplay = (v) =>
    scale === 1 ? String(v) : String(+(v * scale).toFixed(6));
  const [text, setText] = useState(() => toDisplay(value));

  // Re-sync when the stored value changes externally (e.g. switching records).
  useEffect(() => {
    setText(toDisplay(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, scale]);

  const commit = () => {
    const parsed = parseFloat(text);
    onCommit(Number.isFinite(parsed) ? parsed / scale : 0);
  };

  const adornmentProps =
    adornment === '%'
      ? { endAdornment: <InputAdornment position="end">%</InputAdornment> }
      : adornment === '$'
        ? { startAdornment: <InputAdornment position="start">$</InputAdornment> }
        : {};

  return (
    <TextField
      label={label}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.target.blur();
      }}
      type="number"
      size={size}
      helperText={helperText}
      sx={sx}
      slotProps={{ input: adornmentProps }}
      {...otherProps}
    />
  );
}

export default RateField;
