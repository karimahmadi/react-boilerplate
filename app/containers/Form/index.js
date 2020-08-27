/**
 *
 * Form
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectForm from './selectors';
import reducer from './reducer';
import CodeCombo from '../../components/CodeCombo';
import CodeTextLookup from '../../components/CodeTextLookup';

function Form() {
  useInjectReducer({ key: 'form', reducer });

  const [value, setValue] = useState({});

  const handleChange = event => console.log('event:', event);
  const items = [
    { id: 1, code: 1, title: 'فعال' },
    { id: 2, code: 2, title: 'غیر فعال' },
  ];

  const onCodeChange = code => {
    if (code == 1) {
      setValue({ code: 1, title: 'یک' });
    } else if (code == '') {
      setValue({ code: '', title: '' });
    } else {
      setValue({ code, title: 'غیره' });
    }
  };

  const onButtonClick = () => {
    setValue({ code: 5, title: 'پنج' });
  };

  const onKeyUp = event => {
    console.log(event);
  };
  return (
    <div>
      <CodeCombo items={items} maxlength={5} pattern={/^\d*$/} />
      <CodeTextLookup
        value={value}
        onKeyDown={onKeyUp}
        onClick={onButtonClick}
      />
    </div>
  );
}

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  form: makeSelectForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Form);
