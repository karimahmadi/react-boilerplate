/**
 *
 * CodeTextLookup
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OutlinedInput, Button } from '@material-ui/core';

const CodeInput = styled(OutlinedInput)`
  width: calc(${props => props.ratio}%);
  input {
    padding: ${props => props.theme.spacing(0.5, 1)};
  }
`;

const TitleInput = styled(OutlinedInput)`
  width: calc(${props => props.ratio}%);
  input {
    padding: ${props => props.theme.spacing(0.5, 1)};
  }
`;

const CodeTextButton = styled(Button)`
  min-width: ${props => props.theme.spacing(3)}px;
  padding: 0;
`;
const FormControl = styled.div`
  display: flex;
  align-items: inherits;
`;

function CodeTextLookup({
  ratio = '1:4',
  disabled,
  value = { code: '', title: '' },
  propertyCode = 'code',
  propertyTitle = 'title',
  onClick,
  onChange,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  onBlur,
  onFocus,
}) {
  const [code, setCode] = useState(value[propertyCode] || '');
  const [title, setTitle] = useState(value[propertyTitle] || '');

  useEffect(() => {
    setCode(value[propertyCode] || '');
    setTitle(value[propertyTitle] || '');
  }, [value]);

  const getRatio = (rat, index) => {
    const rates = rat.split(':').map(Number);
    return (rates[index] * 100) / (rates[0] + rates[1]);
  };

  const handleChange = event => {
    setCode(event.target.value);
    if (onChange) onChange(event.target.value);
  };
  return (
    <FormControl>
      <CodeInput
        ratio={getRatio(ratio, 0)}
        value={code}
        disabled={disabled}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <TitleInput
        ratio={getRatio(ratio, 1)}
        value={title}
        readOnly
        disabled={disabled}
      />
      <CodeTextButton variant="contained" onClick={onClick} disabled={disabled}>
        ...
      </CodeTextButton>
    </FormControl>
  );
}

CodeTextLookup.propTypes = {
  
};

export default CodeTextLookup;
