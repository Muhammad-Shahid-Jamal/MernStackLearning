
//Hook implementation: useEffect implementation

import React,{ useEffect } from 'react'
import { useState } from 'react'

function UpdateObject() {

  // initialize object
  const [data, setData] = useState({
    count: 1,
    employeeName: 'Zeeshan Junior',
    designation: 'Finance Manager'
  });

  useEffect(() => {
    console.log("component mount!", data);
    if (data.count <= 5) {
      let _employeeName = "Zeeshan Junior";
      let _designation = "Junior Programmer";
      setData({
        ...data,
        employeeName: _employeeName,
        designation: _designation
      });
    } else {
      let _employeeName = "Shahid Senior";
      let _designation = "Senior Programmer";
      setData({
        ...data,
        employeeName: _employeeName,
        designation: _designation
      });
    }
  }, [data.count]) 
     
      

  //update object 
  const addCountValue = () => {
    //console.log(data);
    let _data = {
      ...data,
      count: data.count + 1
    };
    setData(_data);
  }


  return (
    <div>
      <h1>{data.count}</h1>
      <button onClick={addCountValue}>Click to Update</button>
    </div>
  )
}

export default UpdateObject