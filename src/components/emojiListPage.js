import React, { Component } from "react";
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
