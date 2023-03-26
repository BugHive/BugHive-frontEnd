import { useState } from "react";

const useView = () => {
  const [isRow, setIsRow] = useState(true);
  const [isOpen , setIsOpen] = useState(false);
    
  
  const changeToCol = ()=>{    
    setIsRow(false)
}

const changeToRow = ()=>{
  setIsRow(true)
}

const openModal = ()=>{
  setIsOpen(true);
}

const closeModal = ()=>{
  setIsOpen(false);
}

  return {
    isRow,
    changeToCol,
    changeToRow,
    isOpen,
    openModal,
    closeModal
  };
};

export default useView;