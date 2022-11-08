import React,{useContext} from 'react';
import classnames from 'classnames';
import {MenuContext,IContext} from '../index';

interface IMenuItemProps {
  index:number;
  className?:string;
  children:React.ReactNode;
}

const MenuItem:React.FC<IMenuItemProps> = (props) => {

  const {index,className,children} = props;
  const MenuVal = useContext<IContext>(MenuContext)

  const classes = classnames('menu-item',className,{
    'menu-active':index === MenuVal.selectedIndex,
  })

  function handleClick (){
    if(MenuVal.onSelect){
      MenuVal.onSelect(index)
    }
    
  }
  return (
    <li className={classes} onClick={handleClick}>{children}</li>
  )
}


export default MenuItem;