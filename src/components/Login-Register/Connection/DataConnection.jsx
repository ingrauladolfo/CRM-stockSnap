import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataConnectionPropTypes from '@/types/Login-Register/DataConnectionPropTypes/DataConnectionPropTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DataConnection = ({
  pathTitle = '',
  title = '',
  text = '',
  showGoBack = false, // Nueva prop para el path de regreso
}) => {

  return (
    <>
      <div className="mt-6 flex justify-center items-center text-sm font-extrabold gap-x-2">
        <p className="text-white">{text}</p>
        <a
          href={`/${pathTitle}`}
          className="text-[#E9C46A] focus:outline-none focus:underline hover:underline"
        >
          {title}
        </a>

      </div>
      {showGoBack && (
        <div className="mt-6 flex justify-center items-center text-sm font-extrabold gap-x-2">
          <a
            href={`/${pathTitle}`}
            className="text-[#E9C46A] focus:outline-none focus:underline hover:underline ml-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </div>
      )}

    </>

  );
};

DataConnection.propTypes = DataConnectionPropTypes;

export default DataConnection;