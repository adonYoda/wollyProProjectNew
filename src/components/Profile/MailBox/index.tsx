import { Box, Container, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useGetMailboxMessagesQuery } from "../../../API/messageApi";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import InputOutcomingMessage from "./InputOutcomingMessage";
import ListDividers from "./MenuMailBox";
import Message from "./Message";
import { messagePageSizes } from "../../../utils/constants";

const MyContainer = styled.div`
  width: 100%;
  height: calc(
    ${messagePageSizes.heightRow} * ${messagePageSizes.limitMessagesOnPage}px
  );
  display: flex;
  margin: 0 5px;
`;

interface Props {}

const MailPage: React.FC<Props> = () => {
  const [folder, setFolder] = useState<string>("inbox");
  const [flag, setFlag] = useState(false);
  const [page, setPage] = useState(0);

  const { data = [], isLoading } = useGetMailboxMessagesQuery({
    limit: messagePageSizes.limitMessagesOnPage,
    page: page,
    folder: folder,
  });
  if (isLoading) {
    console.log("Index MailBox RENDER");
  } else {
    console.log(data);
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <MyContainer>
        <Grid
          container
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid style={{ padding: "0px", marginLeft: "-100px" }} item xs={4}>
            <ListDividers changeFolder={setFolder} changeFlag={setFlag} />
          </Grid>
          {isLoading ? (
            <Grid
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                padding: "0px",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              item
              xs={9}
            >
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                animation="wave"
                width="100%"
                height={60}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={60}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="rounded"
                width="100%"
                height={60}
                sx={{ bgcolor: "grey.900" }}
              />
            </Grid>
          ) : (
            <Grid item style={{ padding: "0px" }} xs={9}>
              {flag && <InputOutcomingMessage />}
              {!flag && <Message data={data} />}
            </Grid>
          )}
        </Grid>
      </MyContainer>

      <Grid container justifyContent="flex-end" direction="row" padding={2}>
        <RemoveCircleIcon
          cursor="pointer"
          onClick={() => {
            if (page >= 1) {
              setPage((prev) => prev - 1);
            }
          }}
        />
        page {page + 1}
        <AddCircleIcon
          cursor="pointer"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        />
      </Grid>
    </>
  );
};

export default MailPage;
