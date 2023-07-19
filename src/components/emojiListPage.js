import React, { Component } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmojiData } from "../redux/actions/emoji";
import { emojiSelectors } from "../redux/selectors/index";
import Button from "@mui/material/Button";
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    {field: 'category', headerName: 'Category'},
    {field: 'group', headerName: 'Group'},
    {field: 'htmlCode', headerName: 'HTML Code'},
    {field: 'name', headerName: 'Name'},
    {field: 'uniCode', headerName: 'Unicode'}
];
class EmojiListPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.emojiData)
    

    
  }


  render() {
    return (
        <>
        
            <p>Table here</p>
        </>
    )
  }
}

export default EmojiListPage;
