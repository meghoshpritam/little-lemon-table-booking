import { FC, HTMLAttributes } from 'react';
import { Container, Image, Header, Body } from './styles';
import deliveryIcon from '../../assets/deliveryIcon.svg';

interface SpecialFoodCardProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const SpecialFoodCard: FC<SpecialFoodCardProps> = ({ imageUrl, title, price, description, ...props }): JSX.Element => {
  return (
    <Container {...props}>
      <Image src={imageUrl} />
      <Header>
        <span className='title card-title'>{title}</span>
        <span className='price highlight'>$ {price}</span>
      </Header>
      <Body>{description}</Body>

      <button className='ease-in-out duration-300 hover:bg-secondary font-bold border-none py-2 outline-none px-6 mt-3 rounded-b-3xl justify-between flex items-center w-full'>
        Order a delivery
        <img src={deliveryIcon} className='ml-3' alt='Delivery' />
      </button>
    </Container>
  );
};

export default SpecialFoodCard;
