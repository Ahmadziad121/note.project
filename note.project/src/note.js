import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Note extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
        <head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</link>
</head>
<form className="was-validated">
  <div className="mb-3">
    <label for="validationTextarea" class="form-label">Note</label>
    <textarea className="form-control" id="validationTextarea" placeholder="Note your daily" ></textarea>
    <div className="invalid-feedback">
      
    </div>
  </div>
</form>
</div>)}











    }
       
export default Note