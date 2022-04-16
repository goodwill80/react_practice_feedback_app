import {FaQuestion} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function AboutIconLink() {
  return (
    <div className="absolute right-10 top-5 cursor-pointer text-center w-10">
        <Link to={{
            pathname: "/about",
            search: '?sort=name',
            hash: '#hello'
        }}
        
        >
            <FaQuestion size={30} />
            <p className="text-sm">About</p>
        </Link>
       
    </div>
  )
}

export default AboutIconLink