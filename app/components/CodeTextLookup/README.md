```
  const [value,setValue] = useState({});

  const onCodeChange = (code) => {
    if(code==1){
      setValue({code:1,title:'یک'});
    }else if (code==""){
      setValue({code:"",title:''});
    }else{
      setValue({code,title:'غیره'});
    }
  };
  
  const onButtonClick = () => {
    setValue({code:5,title:'پنج'});
  };

return (
  <CodeTextLookup value={value} onChange={onCodeChange} onClick={onButtonClick} propertyCode="code" propertyTitle="title"/>
);
```