import React,{createContext,useState} from 'react';
import classnames from 'classnames';

interface IMenuProps {
  defaultIndex?:number;
  className?:string;
  onSelect?:(index:number)=>void;
  children:React.ReactNode,
  type?:'horizontal' | 'vertical'
}

export interface IContext {
  onSelect?:(index:number)=>void;
  selectedIndex:number;
}

export const MenuContext = createContext<IContext>({selectedIndex:0})

const Menu:React.FC<IMenuProps> = (props) => {
  
  const {defaultIndex,className,onSelect,children,type} = props;
  const [curIndex,setIndex] = useState<number>(defaultIndex ? defaultIndex : 0)

  const classes = classnames('sj-menu',className,{
    'menu-vertical':type === 'vertical',

  })

  const contextValue:IContext = {
    onSelect:handleClick,
    selectedIndex:curIndex
  }

  function handleClick (index:number){
    setIndex(index);
    if(onSelect){
      onSelect(index);
    }
    
  }

  return (
    <MenuContext.Provider value={contextValue}>
      <ul className={classes}>{children}</ul>
    </MenuContext.Provider>
    
  )
}

Menu.defaultProps = {
  defaultIndex:0,
  type:'horizontal'
}




export default Menu;