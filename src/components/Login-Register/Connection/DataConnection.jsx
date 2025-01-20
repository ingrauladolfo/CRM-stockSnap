import React from 'react'
import DataConnectionPropTypes from '@/types/Login-Register/DataConnectionPropTypes/DataConnectionPropTypes';

const DataConnection = ({ pathTitle='', title='', text='' }) => {
  return (
    <div className="mt-6 flex justify-center items-center text-sm font-extrabold gap-x-2">
      <p className="text-white">{text}</p>
      <a
        href={`/${pathTitle}`}
        className="text-[#E9C46A] focus:outline-none focus:underline hover:underline"
      >
        {title}
      </a>
    </div>)
}
DataConnection.propTypes = DataConnectionPropTypes;
export default DataConnection