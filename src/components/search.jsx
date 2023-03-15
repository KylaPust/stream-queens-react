import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {genres_list} from '../static/genres_dict.js';
import {services} from '../static/streaming_services';
 
export default function Search() {
  return (
    <Form>
        <Form.Select aria-label="Default select example">
        <Form.Label>Email address</Form.Label>
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
















// export default function CreateSearch() {
  
//     return <div className="form-center">
//    <form action="/createdsearch" id="get-movies">
//      <div className="form-group">
//      <fieldset>      

//        <div className="form-group">
//        <label>Select a Genre</label>   
//        </div>
//          <div className="form-group">
//            <label>Movie or Show?</label>
//            <select className="form-control" id="result_type">   
//          <option value="movie">Movie</option>  
//          <option value="series">Show</option>
//            </select>

//          <div className="form-group">
//              <label>Select 1 or more streaming services</label>
//              <select multiple className="form-control" id="service">
//          <option value="netflix">netflix</option>     
//          <option value="hulu">hulu</option>      
//          <option value="prime">prime</option>  
//          <option value="disney">disney</option>
//          <option value="hbo">hbo</option>
//          <option value="peacock">peacock</option>
//          <option value="paramount">paramount</option>
//          <option value="starz">starz</option>
//          <option value="showtime">showtime</option>
//          <option value="apple">apple</option>
 
//        </select>
//        </div>
//          <br></br>     
//          <button type="submit" className="btn btn-outline-light" value="Submit">Submit</button> 
//          </div> 
//      </fieldset> 

//      </div>
//  </form>
//  </div>
// }

