import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetMailboxMessagesQuery } from "../../../API/messageApi";
import { IMessageQuery, IState } from "../../../types";
import ListDividers from "./MenuMailBox";
import MessagePreview from "./MessagePreview";

const Container = styled.div`
  width: 850px;
  height: 400px;
  display: flex;
  margin: 0 5px;
`;
interface Props {}

const MailPage: React.FC<Props> = () => {
  const [args, setArgs] = useState<string>("sent");
  const {
    data = [],
    isLoading,
    isError,
  } = useGetMailboxMessagesQuery({
    limit: 1,
    page: 1,
    token: useSelector<IState>((state) => state.token!.token) as string,
    folder: args,
  });

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid style={{ padding: "1" }} item xs={3}>
          <ListDividers changeArgs={setArgs} />
        </Grid>
        <Grid item xs={9}>
          <MessagePreview data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MailPage;
