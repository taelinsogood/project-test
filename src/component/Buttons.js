import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function SizesExample({cartClick}) {

  return (
    <>
      <div className="mb-2">
        <Button variant="primary" size="lg" style={{width: "195px"}}>
          구매하기
        </Button>{' '}                         
        <Link to="/"><Button variant="secondary" size="lg" onClick={()=>cartClick()} style={{width: "195px"}}>
          장바구니
        </Button></Link>
      </div>
    </>
  );
}

export default SizesExample;