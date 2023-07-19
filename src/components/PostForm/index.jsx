import React, {  useEffect , useState } from 'react';

const inputsArray = [
  {
    id: 'title',
    name: 'title',
    type: 'text',
    label: 'Title',
  },
  {
    id: 'body',
    name: 'body',
    type: 'textarea',
    label: 'Body',
  },
];

const PostForm = ({post,isLoading})=> {
  
const [state,setState] = useState({
    title: '',
    body: '',
    isGetFirstTimeData: true,
});
  const handleSubmit = (e) => {
    e.preventDefault();
      const data = {
      title: state.title,
      body: state.body,
    };

  console.log('Post Is Created');
  };

   useEffect (()=> {
    if (post && state.isGetFirstTimeData) {
      setState((prevState)=>( {
        ...prevState,
        title: post.title,
        body: post.body,
        isGetFirstTimeData: false,
      }));
    }
    },[post,state.isGetFirstTimeData]);


  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setState((prevState)=>({
      ...prevState,
      [name]: value,
    }));
  };

  
    return (
      <form onSubmit={handleSubmit}>
        {inputsArray.map((input) => (
          <div key={input.id}>
            <label htmlFor={input.id}>{input.label}</label>
            {input.type === 'textarea' ? (
              <textarea
                id={input.id}
                name={input.name}
                value={state[input.id]}
                onChange={handleChangeInput}
                style={{padding: 10,width: 300,}}
              />
            ) : (
              <input
                type={input.type}
                id={input.id}
                name={input.name}
                value={state[input.id]}
                onChange={handleChangeInput}
                style={{padding: 10,width: 300,}}
              />
            )}
          </div>
        ))}

        <button type='submit'>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    );
  };
              

export default PostForm;
