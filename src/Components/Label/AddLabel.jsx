import React, { Component } from 'react';
import Services from "../../Services/NotesServices.js";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

import MenuItem from "@material-ui/core/MenuItem";
class AddLabel extends Component {


state= {showForm: false}

closeLabel = () => {
    const labelval = {
    label: [this.props.labelDetail?.label],
    id: [this.props.labelDetail?._id]
     };
     console.log()
     console.log(labelval, "asasasas");
     Services.addLabel (labelval)
       .then((data) => {
         toast.success("Label created");
         this.props.getall();
       })
       .catch((err) => {
         toast.error("Label not created");
       });
    }

showForm = () => {
    const closeLabel = () => {
        const labelval = {
            label: [this.props.noteDetail?.label],
           id: [this.props.noteDetail?._id]
         };
         console.log(labelval.label);
         Services.addLabel (labelval)
           .then((data) => {
             toast.success("Label created");
             this.props.getall();
           })
           .catch((err) => {
             toast.error("Label not created");
           });
        }
   return (
     <div> 
    <form id= "add-app">


         <label> Label: </label>
         <input type="text" ></input>

         <button onClick={closeLabel}>Create</button>
      </form>
      </div>
     );
 }

render(){
    return (
        <div className='label-app'>
        <MenuItem  onClick={() => this.setState({showForm: true}) }>Add Label</MenuItem>
        {this.state.showForm ? this.showForm() : null}

        </div>
    );
}

}
export default AddLabel
