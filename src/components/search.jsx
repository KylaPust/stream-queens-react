import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {genres_list} from '../static/genres_dict.js';
import {services} from '../static/streaming_services';
 
export default function Search() {
  return (
    <Form style={{width:"50%"}}>
         <Form.Select aria-label="Default select example">
         <option>Movie or Show?</option>
         <option value="movie">Movie</option>
         <option value="show">TV Show</option>
         </Form.Select>
        <Form.Select aria-label="Default select example">
      <option>Select a Genre</option>
        {genres_list.map((genre) => {
            return (
                <option value={genre[0]}>{genre[1]}</option>
            )
        })}
        </Form.Select>
        {services.map((service) => {
            return(<Form.Check
            style={{color:'black'}}
            inline
            label={service}
            type='checkbox'
            id={service}
            />


             )

        })}
       
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}