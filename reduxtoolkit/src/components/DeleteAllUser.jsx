import React from "react";
import styled from "styled-components";
import { deleteUser } from "../store/slice/UserSlice";
import { useDispatch } from "react-redux";
const DeleteAllUser = () => {

  const dispatch= useDispatch();


  const clearUsers=()=>
  {

    // console.log("hii")
    dispatch(deleteUser());
  }
  return (
    <Wrapper>
      <button className="clear-btn" onClick={clearUsers}>Clear Users</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: blue;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    color: white;
  }
`;

export default DeleteAllUser;
