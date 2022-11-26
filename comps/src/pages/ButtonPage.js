import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

const ButtonPage = () => {

  const handleClick = () => {
    console.log('Primary button clicked!');
  }

  return (
    <div>
      <div>
        <Button className="mb-5" onClick={handleClick} primary>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button onMouseMove={handleClick} warning rounded outline>warning</Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          <GoDatabase />
          Join Our Community!
        </Button>
      </div>
      <div>
        <Button danger>Delete</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
