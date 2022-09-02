import { DataArray } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetMailboxMessagesQuery } from "../../../API/messageApi";
import { IMessageQuery, IState } from "../../../types";
import InputOutcomingMessage from "./InputOutcomingMessage";
import ListDividers from "./MenuMailBox";
import Message from "./Message";

const Container = styled.div`
  width: 850px;
  height: 400px;
  display: flex;
  margin: 0 5px;
`;
interface Props {}

const MailPage: React.FC<Props> =  () => {
  const [folder, setFolder] = useState<string>("inbox");
  const [flag, setFlag] = useState(false)
  const {data = []}= useGetMailboxMessagesQuery({
    limit: 15,
    page: 0,
    token: useSelector<IState>((state) => state.token!.token) as string,
    folder: folder,
  });
 
  console.log(data);
  
  
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid style={{ padding: "1" }} item xs={4}>
          <ListDividers changeFolder={setFolder} changeFlag={setFlag} />
        </Grid>
        <Grid item xs={8}>
           { flag && <InputOutcomingMessage/>}
          { !flag && <Message data ={data} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MailPage;
