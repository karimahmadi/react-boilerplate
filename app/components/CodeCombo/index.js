/**
 *
 * CodeCombo
 * by karim ahmadi
 * at 1399/05/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OutlinedInput, Select as MuiSelect } from '@material-ui/core';

const CodeInput = styled(OutlinedInput)`
  width: calc(${props => props.ratio}%);
  input {
    padding: ${props => props.theme.spacing(0.5, 1)};
  }
`;

const Select = styled(MuiSelect)`
  width: calc(${props => props.ratio}% - 1px);
  select {
    padding: ${props => props.theme.spacing(0.5, 1)};
  }
`;

function CodeCombo({
  items,
  propertyCode = 'code',
  propertyTitle = 'title',
  value,
  onChange,
  ratio = '1:4',
  disabled,
  placeholder,
  type,
  maxlength,
  pattern,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  onBlur,
  onFocus,
}) {
  const [code, setCode] = React.useState(value || '');

  const handleChange = event => {
    if (pattern) {
      const re = new RegExp(pattern);
      const isRegExpMatched = re.test(event.target.value);
      if (!isRegExpMatched) return false;
    }

    if (event.target.value !== '') {
      setCode(event.target.value);
    } else {
      setCode('');
    }
    if (onChange) {
      let selectedItem = items.filter(
        item => item[propertyCode] == event.target.value,
      );
      if (selectedItem && selectedItem.length > 0)
        selectedItem = selectedItem[0];
      else selectedItem = null;
      onChange(selectedItem);
    }
  };

  const renderItems = items =>
    items.map(item => (
      <option key={item[propertyCode]} value={item[propertyCode]}>
        {item[propertyTitle]}
      </option>
    ));

  const getRatio = (ratio, index) => {
    const rates = ratio.split(':').map(Number);
    return (rates[index] * 100) / (rates[0] + rates[1]);
  };

  return (
    <div>
      <CodeInput
        ratio={getRatio(ratio, 0)}
        onChange={handleChange}
        value={code}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        inputProps={{
          maxLength: maxlength,
        }}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <Select
        native
        value={code}
        onChange={handleChange}
        input={<OutlinedInput />}
        ratio={getRatio(ratio, 1)}
        disabled={disabled}
      >
        <option aria-label="None" value="" />
        {renderItems(items)}
      </Select>
    </div>
  );
}

CodeCombo.propTypes = {
  items: PropTypes.array,
  propertyCode: PropTypes.string,
  propertyTitle: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  ratio: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  maxlength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CodeCombo;
