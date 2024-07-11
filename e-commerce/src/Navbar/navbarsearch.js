import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

function Navbarsearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Perform any search-related actions here
  };

  return (
    
    <Form inline id='search'>
       <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </Form>
  );
}
export default Navbarsearch;