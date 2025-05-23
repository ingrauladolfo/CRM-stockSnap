import DataConnectionPropTypes from '@/common/types/Login-Register/DataConnectionPropTypes/DataConnectionPropTypes';
import { FaArrowLeft } from 'react-icons/fa';

const DataConnection = ({  pathTitle = '',  title = '',  text = '',  showGoBack = false, }) => {

  return (
    <div className="mt-auto flex justify-center items-center text-sm font-extrabold gap-x-2">
       {showGoBack && (
        <a
          href={`/${pathTitle}`}
          className="text-[#E9C46A] focus:outline-none focus:underline hover:underline ml-2"
        >
            <FaArrowLeft />
        </a>
      )}
      <p className="text-white">{text}</p>
      <a
        href={`/${pathTitle}`}
        className="text-[#E9C46A] focus:outline-none focus:underline hover:underline"
      >
        {title}
      </a>
     
    </div>
  );
};

DataConnection.propTypes = DataConnectionPropTypes;

export default DataConnection;