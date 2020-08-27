```
  const handleChange = (event) => console.log('event:',event); 
  const items=[
    {id:1,code:1,title:'فعال'},
    {id:2,code:2,title:'غیر فعال'},
  ];
  return <CodeCombo items={items} onChange={handleChange}  propertyCode="code" propertyTitle="title" maxlength={5} pattern={/^\d*$/} />;
  ```